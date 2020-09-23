/* [ pages dir. is page/root where to place layout/component ] */

import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import "../components/layout.css"

const IndexPage = () => (
  /* [ Layout is the DYNAMIC component ] */
  <Layout>
    <SEO title="Home"/>
    <div className="flex flex-col lg:flex-row">
      <div className="max-w-xl">
        <h1 className="text-3xl">Hi Guys!</h1>
        <p className="text-xl mt-2">Welcome to your new Gatsby site.</p>
        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem similique recusandae a voluptas ab fugiat repudiandae eveniet. Cumque, aliquid adipisci. Doloribus repellendus dolore magni est aliquid reiciendis nisi hic. Sit?</p>
      </div>

      <div className="max-w-lg w-3/12 bg-teal-500">
        <Image/>
      </div>
    </div>

  </Layout>
)

export default IndexPage
