import { Card, CardMedia, Grid, makeStyles } from "@material-ui/core"
import React from "react"
import { InfoCardContent } from "../../molecules"

const useStyles = makeStyles({
  media: {
    height: 400,
    width: 400,
    borderRadius: 400,
    margin: 50,
  },
  card: {},
})

export default function AboutInfoCard(): JSX.Element {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item>
          <CardMedia
            className={classes.media}
            image="https://avatars.githubusercontent.com/u/43592915"
          />
        </Grid>
        <Grid>
          <InfoCardContent title="Nickname" content="Kazu" />
          <InfoCardContent title="AGE" content="24" />
          <InfoCardContent title="Job" content="Applications Engineer" />
        </Grid>
      </Grid>
    </Card>
  )
}
