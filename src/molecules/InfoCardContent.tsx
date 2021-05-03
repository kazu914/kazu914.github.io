import { CardContent, Link, Typography } from "@material-ui/core"
import React from "react"

interface Props {
  title: string
  content: string
  url?: string
}

export default function InfoCardContent(props: Props): JSX.Element {
  const { title, content, url } = props
  return (
    <CardContent>
      <Typography style={{ color: "gray" }}>{title}</Typography>
      {url ? (
        <Link href={url} variant="h5">
          {content}
        </Link>
      ) : (
        <Typography variant="h5">{content}</Typography>
      )}
    </CardContent>
  )
}
