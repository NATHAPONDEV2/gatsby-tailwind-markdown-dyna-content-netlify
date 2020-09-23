/*[ This is Template Page for Every Blog-posts detail ]*/

import React from 'react'
import LayoutBlogPost from '../components/layout-blog-post'
import SEO from "../components/seo"

export default function BlogPost({data}) {

    const post = data.markdownRemark

    console.log(data)

    return (
        <LayoutBlogPost>  
            <SEO title={ post.frontmatter.title } />
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
                <div className="max-w-2xl bg-white mt- blog-post">
                    <div>
                        <br/>
                        <h1 className="text-2xl">{ post.frontmatter.title }</h1>
                        <h3 className="text-gray-600 italic mt-1">Posted by <b>{ post.frontmatter.author }</b> on { post.frontmatter.date }</h3>

                        <hr/>
                        
                        <div dangerouslySetInnerHTML={{__html:post.html}} className="mt-4"/>
                    </div>
                </div>

                <aside className="stickybar bg-white">
                    <div className="flex">
                        <div className="placeholder-img"></div>
                        <h3><b>{ post.frontmatter.author }</b></h3>
                    </div>
                    <span className="text-xs font-bold text-gray-600">About Author</span>
                        <p>{ post.frontmatter.description }</p>
                    <div className="btn">
                        <a href="#">Follow</a>
                    </div>
                </aside>
            </div>
        </LayoutBlogPost>
    )
}

/*[ map Markdown data to Props ]*/
export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: {eq: $path} }) {
            html
            frontmatter {
                path
                title
                date
                author
                description
            }
        }
    }
`
