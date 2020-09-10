/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/header"
import "./layout.css"
import styled from "styled-components"

const LayoutStyled = styled.div`
  height: 100vh;
  width: 100vw;
  @keyframes tabhide {
      from {
        clip-path: inset(0 0 0 100%);
      }
      to {
        clip-path: inset(0 0 0 0);
      }
  }

  @keyframes slide {
    from {
      width: 0
    }
    to{
      width: 100px;
    }
  }
  @keyframes slide165 {
    from {
      width: 0;
      visibility: visible;
    }
    to{
      width: 165px;
      visibility: visible;
    }
  }

  @keyframes slideVert {
    from {
      height: 0;
      visibility: visible;
    }
    to {
      height: 120px;
      visibility: visible;
    }
  }

  > .menu {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    width: 30vw;
    align-items: center;
    justify-content: space-between;
    margin: 32px 32px 0 0;
    animation: tabhide 1.8s forwards;
  }

  .body {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
    padding: 0 1.0875rem 1.45rem;

    .sandbox-playground {
      border: solid 1px #454dcc;
      margin-top: 24px;
      width: 75%;
      height: 60%;
      display: flex;

      .slide {
        height: 65px;
        animation: slide 1s forwards;
        background-color: green;
        animation-timing-function: linear;
      }
      .slide2 {
        width: 65px;
        visibility: hidden;
        animation: slideVert 1s forwards;
        background-color: aqua;
        animation-delay: 1s;
        animation-timing-function: linear;
      }
      .slide3 {
        position: absolute;
        visibility: hidden;
        width: 165px;
        height: 65px;
        background-color: red;
        left: 364px;
        top: 284px;
        animation: slide165 1s forwards;
        animation-delay: 2s;
        animation-timing-function: linear;
      }
      .slide4 {
        position: absolute;
        // visibility: hidden;
        width: 65px;
        height: 165px;
        background-color: purple;
        left: 529px;
        top: 284px;
      }
    }
  }



`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutStyled>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="menu">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Projects</h3>
        <h3>Contact</h3>
      </div>
      <div className="body">
        {children}
      </div>
    </LayoutStyled>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
