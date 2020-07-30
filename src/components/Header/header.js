import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { HeaderStyled } from './styles';

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <div className="container-wrap">
      <div className="header-container">
        <div
          style={{
            margin: `0 auto 0 25px`,
            maxWidth: 960,
            padding: `1.25rem 1.0875rem 1rem 0`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              className="title-link"
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
      </div>
    </div>
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
