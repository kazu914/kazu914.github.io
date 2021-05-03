import { IconButton } from "@material-ui/core"
import TwitterIcon from "@material-ui/icons/Twitter"
import React from "react"

import { LINKS, BRAND_COLORS } from "../../constants"

export default function MyTwitterIcon(): JSX.Element {
  return (
    <IconButton href={LINKS.twitter}>
      <TwitterIcon style={{ color: BRAND_COLORS.twitter }} />
    </IconButton>
  )
}
