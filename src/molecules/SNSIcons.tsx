import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import React from "react"

import { ZennIcon, TwitterIcon, GitHubIcon } from "../atoms/icons"

export default function SNSIcons(): JSX.Element {
  return (
    <CardContent>
      <Typography style={{ color: "gray" }}>Links</Typography>
      <TwitterIcon />
      <GitHubIcon />
      <ZennIcon />
    </CardContent>
  )
}
