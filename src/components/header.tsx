import * as React from "react"
import { Link } from "gatsby"
import { AppBar, Box } from "@material-ui/core"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props): JSX.Element => (
  <AppBar position="static" elevation={0} style={{ backgroundColor: "black" }}>
    <Box display="flex" justifyContent="center">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <Box
          p={4}
          py={1}
          my={2}
          fontSize="h4.fontSize"
          style={{ backgroundColor: "white" }}
        >
          {siteTitle}
        </Box>
      </Link>
    </Box>
  </AppBar>
)

export default Header
