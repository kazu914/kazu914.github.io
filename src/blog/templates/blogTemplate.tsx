import React from "react"
import { graphql, PageProps } from "gatsby"
import { BlogIndexQuery } from "../../../types/graphql-types"

export default function Template(
  props: PageProps<BlogIndexQuery>
): JSX.Element {
  const { data } = props
  const { markdownRemark } = data // data.markdownRemark holds your post data
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{markdownRemark?.frontmatter?.title}</h1>
        <h2>{markdownRemark?.frontmatter?.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{
            __html: markdownRemark?.html || "undefined",
          }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogIndex($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
