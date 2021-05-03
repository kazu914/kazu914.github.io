import { Card, Grid, makeStyles } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles({
  media: {
    height: 400,
    width: 400,
    borderRadius: 400,
    margin: 50,
  },
  card: {},
})

interface Props {
  justify?: "center"
}

export default function AboutInfoCard(
  props: React.PropsWithChildren<Props>
): JSX.Element {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <Grid container alignItems="center" justify={props.justify}>
        {props.children}
      </Grid>
    </Card>
  )
}
