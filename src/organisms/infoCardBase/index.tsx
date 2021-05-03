import React from "react"
import { GridCard, InfoCardContent } from "../../molecules"

type InfoCardContentProps = React.ComponentProps<typeof InfoCardContent>

interface Props {
  contents: InfoCardContentProps[]
}

export default function InfoCardBase(props: Props): JSX.Element {
  const { contents } = props
  return (
    <GridCard>
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
