import { Typography } from "@material-ui/core"
import React from "react"
import Layout from "../../components/layout"
import { AboutInfoCard } from "../../organisms"

export default function About(): JSX.Element {
  return (
    <Layout>
      <div>
        <Typography variant="h3" align="center" style={{ margin: 40 }}>
          About me
        </Typography>
      </div>
      <AboutInfoCard />
    </Layout>
  )
}
