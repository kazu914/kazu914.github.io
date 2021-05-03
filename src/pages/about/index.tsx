import { Typography } from "@material-ui/core"
import React from "react"
import Layout from "../../components/layout"
import {
  AboutInfoCard,
  CertificationInfoCard,
  EducationInfoCard,
  PublicationInfoCard,
} from "../../organisms"

export default function About(): JSX.Element {
  return (
    <Layout>
      <div>
        <Typography variant="h3" align="center" style={{ margin: 40 }}>
          About me
        </Typography>
      </div>
      <AboutInfoCard />
      <div>
        <Typography variant="h3" align="center" style={{ margin: 40 }}>
          Education
        </Typography>
      </div>
      <EducationInfoCard />
      <div>
        <Typography variant="h3" align="center" style={{ margin: 40 }}>
          Publication
        </Typography>
      </div>
      <PublicationInfoCard />
      <div>
        <Typography variant="h3" align="center" style={{ margin: 40 }}>
          Certifications
        </Typography>
      </div>
      <CertificationInfoCard />
    </Layout>
  )
}
