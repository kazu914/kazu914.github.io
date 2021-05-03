import { Card, Grid, makeStyles } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles({
  card: {},
})

const GridCard: React.FC = ({ children }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <Grid container alignItems="center">
        {children}
      </Grid>
    </Card>
  )
}

export default GridCard
