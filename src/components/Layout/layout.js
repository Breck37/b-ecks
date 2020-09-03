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
  @keyframes tabhide {
      from {
        clip-path: inset(0 0 0 100%);
      }
      to {
        clip-path: inset(0 0 0 0);
      }
  }

  @keyframes hide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
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
    margin-top: 24px;
    maxWidth: 960;
    padding: 0 1.0875rem 1.45rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
        <main>{children}</main>
      </div>
    </LayoutStyled>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
