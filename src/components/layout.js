/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

/*[ You can have mutiple Layouts for deferrent Pages but GraphQL query name cannot be the same ]*/
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
    <>
      {/* Header Nav */}
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      {/* This is Dynamic Layout, this div is where children/dynamic content will be placed */}
      <div className="max-w-screen-xl min-h-screen pt-16 px-6 m-auto">
        <main className="mt-12">{children}</main>



        {/* Footer */}
        <footer className="absolute bottom-0">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a className="text-gray-600" href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
        

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
