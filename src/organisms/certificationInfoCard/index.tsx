import { Card, Grid } from "@material-ui/core"
import React from "react"
import { InfoCardContent } from "../../molecules"

export default function CertificationInfoCard(): JSX.Element {
  return (
    <Card>
      <Grid container alignItems="center">
        <InfoCardContent
          title="2018-3-11"
          content="TOEIC Listening & Reading Test: Score 845"
        />
      </Grid>
    </Card>
  )
}
