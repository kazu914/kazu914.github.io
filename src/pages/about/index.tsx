import React from "react"
import Layout from "../../components/layout"
import { ABOUT_CONTENTS } from "../../constants"
import { AboutInfoCard, AboutSection, InfoCardBase } from "../../organisms"

export default function About(): JSX.Element {
  return (
    <Layout>
      <AboutSection sectionTitle="About me" content={<AboutInfoCard />} />
      <AboutSection
        sectionTitle="Educations"
        content={<InfoCardBase contents={ABOUT_CONTENTS.EDUCATIONS} />}
      />
      <AboutSection
        sectionTitle="Publications"
        content={<InfoCardBase contents={ABOUT_CONTENTS.PUBLICATOINS} />}
      />
      <AboutSection
        sectionTitle="Certifications"
        content={<InfoCardBase contents={ABOUT_CONTENTS.CERTICICATIONS} />}
      />
    </Layout>
  )
}
