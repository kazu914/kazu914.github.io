import { Typography } from "@material-ui/core"
import React from "react"

interface Props {
  sectionTitle: string
  content: JSX.Element
}

export default function AboutSection(props: Props): JSX.Element {
  const { sectionTitle, content } = props
  return (
    <div>
      <div>
        <Typography variant="h3" align="center" style={{ margin: 40 }}>
          {sectionTitle}
        </Typography>
      </div>
      {content}
    </div>
  )
}
