/*[ Create Dynamic Page from Markdown file/data ]*/

const path = require('path');

// createPage is Gatsby API
exports.createPages = async function ({ actions, graphql }) {

    /*[ Bring in the Template ]*/
    const postTemplate = path.resolve('./src/templates/blog-post.js');

    /*[ Query all Markdown data in this filesystem ]*/
    const { data } = await graphql(`
        {
            allMarkdownRemark {
                edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                        date
                        author
                        description
                    }
                    excerpt
                }
                }
            }
        }
    `)
    /*[ After recieved data object, Iterate over data for Create a specific Page ]*/
    /*[ 
        The reason why forEach use double Parenthesis and a Curly Bracket becasue 
        (({node})) is actually a "GraphQL query" from the path 'data/allMarkdownRemark/edges.node/so on...' not an regular Object 
    ]*/
    data.allMarkdownRemark.edges.forEach(({node}) => {
        
      /*[ Finally, Use Iterated data for creating a Page ]*/
      actions.createPage({
        path: node.frontmatter.path,
        component: postTemplate
      })
    })
}
















// const path = require('path');
// const { default: postsTemplate } = require('./src/templates/blog-post');

//  exports.createPages = ({graphql, actions}) => {
//     const { createPage } = actions

//     // bring in template
//     const postTemplate = path.resolve('./src/templates/blog-post.js');

//     return graphql(`
//         // {
//         //     allMarkdownRemark {
//         //         edges {
//         //         node {
//         //             id
//         //             frontmatter {
//         //             path
//         //             title
//         //             date
//         //             author
//         //             }
//         //             excerpt
//         //         }
//         //         }
//         //     }
//         // }
// //     `).then(res => {
//         if(res.errors) {
//             return Promise.reject(res.errors)
//         }

//         res.data.allMarkdownRemark.edges.forEach(({node}) => {
//             createPage({
                // path: node.frontmatter.path,
                // component: postTemplate
//             })
//         })
//     })
//  }
