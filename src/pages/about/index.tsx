import React from "react"
import Layout from "../../components/layout"
import { ABOUT_CONTENTS } from "../../about/constants"
import { AboutInfoCard, InfoCardBase } from "../../about/organisms"

export default function About(): JSX.Element {
  return (
    <Layout>
      <AboutInfoCard />
      <InfoCardBase title="Educations" contents={ABOUT_CONTENTS.EDUCATIONS} />
      <InfoCardBase
        title="Publications"
        contents={ABOUT_CONTENTS.PUBLICATOINS}
      />
      <InfoCardBase
        title="Certifications"
        contents={ABOUT_CONTENTS.CERTICICATIONS}
      />
    </Layout>
  )
}
