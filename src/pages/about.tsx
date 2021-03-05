import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { AboutQuery } from "../../types/graphql-types"

export default function About(data: AboutQuery): JSX.Element {
  return (
    <Layout>
      <h1>
        {data.site?.siteMetadata ? data.site.siteMetadata.title : "undefined"}
      </h1>
      <p>
        Were the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query About {
    site {
      siteMetadata {
        title
      }
    }
  }
`
