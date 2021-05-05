import React from "react"
import { GridCard, InfoCardContent } from "../../molecules"

type InfoCardContentProps = React.ComponentProps<typeof InfoCardContent>

interface Props {
  contents: InfoCardContentProps[]
  title: string
}

export default function InfoCardBase(props: Props): JSX.Element {
  const { title, contents } = props
  return (
    <GridCard title={title}>
      {contents.map(item => (
        <InfoCardContent
          key={item.content}
          title={item.title}
          content={item.content}
          url={item.url}
        />
      ))}
    </GridCard>
  )
}
