import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

/* [ Main function only return JXS so it uses () instead of {} ] */
const about = () => (
    <Layout>
        <SEO title="About Page" />

        <h1>Hello, welcome to About Page!</h1>
        <p>Good to see you here</p>

    </Layout>
)

export default about;
