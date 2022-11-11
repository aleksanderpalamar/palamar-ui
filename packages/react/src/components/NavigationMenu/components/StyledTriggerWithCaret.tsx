/* eslint-disable prettier/prettier */
/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { NavigationMenuTrigger, StyledCaret } from "../styles";

export const StyledTriggerWithCaret = forwardRef(
  ({ children, ...props }: any, forwardedRef) => (
    <NavigationMenuTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledCaret aria-hidden />
    </NavigationMenuTrigger>
  )
);