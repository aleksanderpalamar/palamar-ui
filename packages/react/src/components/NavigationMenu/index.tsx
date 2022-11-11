/* eslint-disable prettier/prettier */
import { ComponentProps } from 'react'
import {
  ContentList,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  ViewportPosition,
} from './styles'
import { StyledTriggerWithCaret } from './components/StyledTriggerWithCaret'
import { ContentListItem } from './components/ContentListItem'
import { ContentListItemCallout } from './components/ContentListItemCallout'

export interface NavigationMenuProps
  extends ComponentProps<typeof NavigationMenuRoot> {}

export function NavigationMenu() {
  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger as={StyledTriggerWithCaret}>
            Learn
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentList layout="one">
              <ContentListItemCallout />
              <ContentListItem href="https://stitches.dev/" title="Stitches">
                Stitches is a low-level CSS-in-JS library that allows you to
                write CSS in JavaScript.
              </ContentListItem>
              <ContentListItem
                href="/?path=/story/utilities-tokens-colors--page"
                title="Colors"
              >
                A list of all the colors used in the design system.
              </ContentListItem>
              <ContentListItem href="https://phosphoricons.com/" title="Icons">
                A collection of over 1,000 open-source icons.
              </ContentListItem>
            </ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger as={StyledTriggerWithCaret}>
            Docs
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentList layout="two">
              <ContentListItem
                href="/?path=/story/utilities-tokens-colors--page"
                title="Colors"
              >
                A list of all the colors used in the design system.
              </ContentListItem>
              <ContentListItem
                href="/?path=/story/utilities-tokens-font-family--page"
                title="FontFamily"
              >
                A list of all the font families used in the design system.
              </ContentListItem>
              <ContentListItem
                href="/?path=/story/utilities-tokens-font-size--page"
                title="FontSize"
              >
                A list of all the font sizes used in the design system.
              </ContentListItem>
              <ContentListItem
                href="/?path=/story/utilities-tokens-font-weight--page"
                title="FontWeight"
              >
                A list of all the font weights used in the design system.
              </ContentListItem>
              <ContentListItem
                href="/?path=/story/utilities-tokens-line-heights--page"
                title="LineHeight"
              >
                A list of all the line heights used in the design system.
              </ContentListItem>
              <ContentListItem
                href="/?path=/story/utilities-tokens-letter-spacing--page"
                title="LetterSpacing"
              >
                A list of all the letter spacings used in the design system.
              </ContentListItem>
            </ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="https://github.com/aleksanderpalamar"
            target="_blank"
          >
            GitHub
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuIndicator />
      </NavigationMenuList>
      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenuRoot>
  )
}
