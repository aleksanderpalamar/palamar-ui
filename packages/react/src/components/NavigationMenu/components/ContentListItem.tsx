/* eslint-disable prettier/prettier */
/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { LinkText, LinkTitle, ListItem, NavigationMenuLink } from "../styles";

export const ContentListItem = forwardRef(
  ({ children, title, ...props }: any, forwardedRef) => (
    <ListItem>
      <NavigationMenuLink
        {...props}
        ref={forwardedRef}
        css={{
          padding: 12,
          borderRadius: 6,
          "&:hover": { backgroundColor: "hsl(0, 0%, 95%)" },
        }}
      >
        <LinkTitle>{title}</LinkTitle>
        <LinkText>{children}</LinkText>
      </NavigationMenuLink>
    </ListItem>
  )
);