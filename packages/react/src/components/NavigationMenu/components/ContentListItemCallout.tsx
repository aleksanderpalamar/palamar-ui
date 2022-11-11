/* eslint-disable prettier/prettier */
/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { LinkText, LinkTitle, ListItem, NavigationMenuLink } from "../styles";

export const ContentListItemCallout = forwardRef(
  ({ children, ...props }: any, forwardedRef) => (
    <ListItem css={{ gridRow: "span 3" }}>
      <NavigationMenuLink
        {...props}
        href="/"
        ref={forwardedRef}
        css={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          alignItems: "flex-start",
          height: "100%",
          background: `linear-gradient(135deg, ${"$palamar300"} 0%, ${"$blue300"} 100%)`,
          borderRadius: 6,
          padding: 25,          
          textDecoration: "none",
          outline: "none",
          userSelect: "none",          
        }}
      >
        <svg
          width="38"
          height="38"
          viewBox="0 0 50 50"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M49.2823 0.335489L37.2215 45.7291C37.1602 45.9352 36.9148 45.997 36.7718 45.8528L28.6972 37.7137L34.748 14.9653C34.8094 14.7592 34.6254 14.5738 34.4209 14.6356L11.853 20.7348L3.81928 12.6369C3.67619 12.4927 3.73752 12.2454 3.94194 12.1836L48.9552 0.00580274C49.1596 -0.035408 49.3436 0.15004 49.2823 0.335489Z"
          />
          <path
            opacity="0.5"
            d="M28.6968 37.7133L25.5896 49.4583C25.5283 49.6644 25.283 49.7262 25.1398 49.5819L0.0779854 24.3403C-0.0651083 24.1961 -0.00378256 23.9489 0.200638 23.8871L11.8526 20.7344L28.6968 37.7133Z"
          />
          <path d="M34.747 14.9649L28.6962 37.7133L11.852 20.7344L34.4199 14.6352C34.6244 14.5734 34.8083 14.7588 34.747 14.9649Z" />
        </svg>

        <LinkTitle
          css={{
            fontSize: "$lg",
            color: "$white",
            marginTop: 16,
            marginBottom: 7,
          }}
        >
          Palamar-UI
        </LinkTitle>
        <LinkText css={{ color: "$white" }}>
          An open-source UI component library for building high-quality,
          accessible design systems and web apps.
        </LinkText>
      </NavigationMenuLink>
    </ListItem>
  )
);