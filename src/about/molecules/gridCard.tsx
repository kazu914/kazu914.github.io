import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import React from "react"

const useStyles = makeStyles({
  card: {
    borderRadius: "50px",
    background: "#e0e0e0",
    boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
    padding: 20,
    marginTop: 40,
    marginBottom: 40,
  },
  title: {
    textDecorationLine: "underline",
    color: "#505050",
  },
})

interface Props {
  justify?: "center"
  title: string
}

export default function AboutInfoCard(
  props: React.PropsWithChildren<Props>
): JSX.Element {
  const { title } = props
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h3" align="center" className={classes.title}>
          {title}
        </Typography>
      </CardContent>
      <Grid container alignItems="center" justify={props.justify}>
        {props.children}
      </Grid>
    </Card>
  )
}
