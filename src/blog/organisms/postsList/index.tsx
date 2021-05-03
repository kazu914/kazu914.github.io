import React from "react"

import { PostsListQuery } from "../../../../types/graphql-types"
import PostsListRow from "../postsListRow"

interface Props {
  data: PostsListQuery
}

export default function PostsList(props: Props): JSX.Element {
  const { allMarkdownRemark } = props.data
  return (
    <div>
      <p>計 {allMarkdownRemark.totalCount}記事</p>
      <h4>
        {allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter && node.frontmatter.slug) {
            return <PostsListRow node={node} />
          }
        })}
      </h4>
    </div>
  )
}
