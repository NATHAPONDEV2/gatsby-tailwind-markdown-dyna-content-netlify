/*[ 
    WORLFLOW in this page: 
            Query All Markdown file in filesystem
            and display its frontmatter/metadata for user to click and navigate
            to specific page.

        AND! After each Blog post link is being clicked, it grabs link "path" data e.g. /post-one
            and navigates to that page
        
        BUT! That detail blog posts page are dynamic it doesn't exit in filesystem
            so that's why it need to be created in 'gatsby-node.js' file based on a single template.
]*/

import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import { Link }from 'gatsby'
// import PostsTemplate from '../posts/posts-template'

/* [ The data from the graphql query will be in props ]*/
const blog = ({data}) => (
    
    <Layout>
        <SEO title="blog" />
        <h1 className="text-3xl text-center">Welcome to Blog</h1>
        <p className="text-1xl text-center mt-2">Read the latest blogs here</p>

        {data.allMarkdownRemark.edges.map(post => (
            <div key={ post.node.id } className="mt-4">
                <Link to={ post.node.frontmatter.path } className="text-teal-500 font-bold">{ post.node.frontmatter.title }</Link>
                <br/>
                <small>Posted by <b>{ post.node.frontmatter.author }</b> on { post.node.frontmatter.date }</small>
                <br/>
                <br/>
                <hr/>
            </div>
        ))}
    </Layout>
)

/*[ map Markdown data to Props ]*/
export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                path
                title
                date
                author
              }
              excerpt
            }
          }
        }
      }
`

export default blog;
