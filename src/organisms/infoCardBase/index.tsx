import { Card, Grid } from "@material-ui/core"
import React from "react"
import { InfoCardContent } from "../../molecules"

type InfoCardContentProps = React.ComponentProps<typeof InfoCardContent>

interface Props {
  contents: InfoCardContentProps[]
}

export default function InfoCardBase(props: Props): JSX.Element {
  const { contents } = props
  return (
    <Card>
      <Grid container alignItems="center">
        {contents.map(item => (
          <InfoCardContent
            key={item.content}
            title={item.title}
            content={item.content}
            url={item.url}
          />
        ))}
      </Grid>
    </Card>
  )
}
