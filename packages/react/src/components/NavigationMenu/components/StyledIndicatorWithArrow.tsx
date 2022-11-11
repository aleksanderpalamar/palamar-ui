/* eslint-disable prettier/prettier */
/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { NavigationMenuIndicator, StyledArrow } from "../styles";

export const StyledIndicatorWithArrow = forwardRef(
  (props: any, forwardedRef) => (
    <NavigationMenuIndicator {...props} ref={forwardedRef}>
      <StyledArrow />
    </NavigationMenuIndicator>
  )
);
