/* eslint-disable prettier/prettier */

import { ComponentProps } from "react";
import { SwitchContainer, SwitchThumb } from "./styles";

export interface SwitchProps extends ComponentProps<typeof SwitchContainer> {}

export function Switch(props: SwitchProps) {
  return (
    <SwitchContainer {...props}>
      <SwitchThumb />      
    </SwitchContainer>
  )
}

Switch.displayName = "Switch";