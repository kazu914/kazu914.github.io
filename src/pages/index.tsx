import * as React from "react"

import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (): JSX.Element => (
  <Layout>
    <Container>
      <SEO title="Home" />
      <p>鋭意作成中</p>
      <Button variant="contained">button</Button>
    </Container>
  </Layout>
)

export default IndexPage
