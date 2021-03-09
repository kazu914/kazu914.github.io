import * as React from "react"

import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = (): JSX.Element => (
  <Layout>
    <Container>
      <SEO title="Home" />
      <p>鋭意作成中</p>
      <Link to="about" style={{ textDecoration: "none" }}>
        <Button variant="contained">自己紹介へ</Button>
      </Link>
      <br />
      <Link to="blogs" style={{ textDecoration: "none" }}>
        <Button variant="contained">ブログへ</Button>
      </Link>
    </Container>
  </Layout>
)

export default IndexPage
