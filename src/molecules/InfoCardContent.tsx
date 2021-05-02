import { CardContent, Typography } from "@material-ui/core"
import React from "react"

interface Props {
  title: string
  content: string
}

export default function InfoCardContent(props: Props): JSX.Element {
  const { title, content } = props
  return (
    <CardContent>
      <Typography style={{ color: "gray" }}>{title}</Typography>
      <Typography variant="h5">{content}</Typography>
    </CardContent>
  )
}
