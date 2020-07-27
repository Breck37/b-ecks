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

  // > .cover {
  //   opacity: 0;
  //   position: absolute;
  //   right: 0;
  //   top: 0;
  //   width: 35vw;
  //   height: 100px;
  //   z-index: 1000;
  //   background-color: #fff;
  //   animation: hide 2s forwards;
  // }

  > .menu {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    width: 30vw;
    align-items: center;
    justify-content: space-between;
    margin: 32px 32px 0 0;
    animation: tabhide 4s forwards;
    animation-delay: 0s;
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
      <div className="cover" />
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
