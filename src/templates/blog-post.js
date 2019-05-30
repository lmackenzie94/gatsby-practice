import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Layout from "../layouts/layout"
import Helmet from "react-helmet"

const Template = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Helmet title={`Luke - ${post.frontmatter.title}`} />
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default Template

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
