import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../../components/layout"

import { PostsListQuery } from "../../../types/graphql-types"
import { PostsList } from "../../organisms"

export default function Blog(props: PageProps<PostsListQuery>): JSX.Element {
  return (
    <Layout>
      <h1>ブログトップページを作る</h1>
      <p>ここにブログのトップページを作る</p>
      <PostsList data={props.data} />
    </Layout>
  )
}
export const postsListQuery = graphql`
  query PostsList {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            slug
          }
          excerpt
        }
      }
    }
  }
`
