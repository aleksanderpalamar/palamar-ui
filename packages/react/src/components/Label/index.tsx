/* eslint-disable prettier/prettier */
import { Component, ReactNode } from "react"
import { LabelContainer, LabelText } from "./styles"

export interface LabelProps extends Component<typeof LabelContainer> {
  children: ReactNode
  htmlFor?: string
  label: string
  required?: boolean
  disabled?: boolean
}

export const Label = (props: LabelProps) => {
  return (
    <LabelContainer {...props}>
      <LabelText 
        htmlFor={props.htmlFor}
      >
        {props.label}
      </LabelText>         
    </LabelContainer>
  )
}

Label.displayName = 'Label'