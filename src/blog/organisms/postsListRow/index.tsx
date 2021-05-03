import { Link } from "gatsby"
import React from "react"
import { MarkdownRemarkFrontmatter } from "../../../../types/graphql-types"

interface Props {
  node: {
    id: string
    frontmatter?: MarkdownRemarkFrontmatter | null
  }
}

export default function PostsListRow(props: Props): JSX.Element {
  const { node } = props
  return (
    <div key={node.id}>
      {node.frontmatter && node.frontmatter.slug && (
        <div>
          <Link to={node.frontmatter.slug}>
            <p>{node.frontmatter.title}</p>
          </Link>
          <p>{node.frontmatter.date}</p>
        </div>
      )}
    </div>
  )
}
