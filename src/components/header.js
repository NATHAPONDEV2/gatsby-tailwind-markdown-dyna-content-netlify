import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu"

const Header = ({ siteTitle }) => (
  <header className="bg-white border-b-2 border-gray-200 p-2 w-full fixed">

    <div className="flex max-w-screen-xl m-auto justify-between items-center">
      
      <h1 className="text-lg md:text-2xl font-bold p-4">
        <Link to="/" className="text-teal-500">
          {siteTitle}
        </Link>
      </h1>

      {/* Nested menu component inside Header to stay fixed*/}
      <Menu />

    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
