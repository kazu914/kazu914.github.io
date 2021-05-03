import React from "react"
import Layout from "../../components/layout"
import {
  AboutInfoCard,
  AboutSection,
  CertificationInfoCard,
  EducationInfoCard,
  PublicationInfoCard,
} from "../../organisms"

export default function About(): JSX.Element {
  return (
    <Layout>
      <AboutSection sectionTitle="About me" content={<AboutInfoCard />} />
      <AboutSection sectionTitle="Education" content={<EducationInfoCard />} />
      <AboutSection
        sectionTitle="Publication"
        content={<PublicationInfoCard />}
      />
      <AboutSection
        sectionTitle="Certifications"
        content={<CertificationInfoCard />}
      />
    </Layout>
  )
}
