import { Card, Grid } from "@material-ui/core"
import React from "react"
import { InfoCardContent } from "../../molecules"

export default function EducationInfoCard(): JSX.Element {
  return (
    <Card>
      <Grid container alignItems="center">
        <InfoCardContent
          title="2012-4 〜 2015-3"
          content="Seiseiko High School, Kumamoto"
          url="http://seiseiko.ed.jp/"
        />
        <InfoCardContent
          title="2015-4 〜 2019-3"
          content="School of Electrical and Electronic Engineering, Osaka Prefecture University"
          url="https://www.osakafu-u.ac.jp/academics/college/ce/seee/"
        />
        <InfoCardContent
          title="2019-4 〜 2021-3"
          content="Department of Computer Science and Intelligent Systems, Graduate School of Engineering, Osaka Prefecture University"
          url="http://www.cs.osakafu-u.ac.jp/grad"
        />
      </Grid>
    </Card>
  )
}
