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
    0% {
      visibility: hidden;
    }
    25% {
      visibility: hidden;
    }
    50% {
      visibility: hidden;
    }
    75% {
      visibility: hidden;
    }
    100% {
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
    margin: 40px 32px 0 0;
    animation: tabhide 4s linear;
    transition: visibility 3s;
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
  console.log('data------------', data)
  return (
    <LayoutStyled>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="menu">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Projects</h3>
        <h3>Contact</h3>
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          background: 'aqua',
        }}
      >
        <main >{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </LayoutStyled>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
