import { IconButton } from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"
import React from "react"

import { LINKS, BRAND_COLORS } from "../../constants"

export default function MyGitHubIcon(): JSX.Element {
  return (
    <IconButton href={LINKS.github}>
      <GitHubIcon style={{ color: BRAND_COLORS.github }} />
    </IconButton>
  )
}
