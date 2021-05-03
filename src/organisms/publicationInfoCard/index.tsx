import { Card, Grid } from "@material-ui/core"
import React from "react"
import { InfoCardContent } from "../../molecules"

export default function PublicationInfoCard(): JSX.Element {
  return (
    <Card>
      <Grid container alignItems="center">
        <InfoCardContent
          title="2018-10"
          content="Estimation of Student's Engagement Using a Smart Chair"
          url="https://dl.acm.org/doi/10.1145/3267305.3267611"
        />
        <InfoCardContent
          title="2019-9"
          content="Estimation of student's engagement based on the posture"
          url="https://dl.acm.org/doi/10.1145/3341162.3343767"
        />
      </Grid>
    </Card>
  )
}
