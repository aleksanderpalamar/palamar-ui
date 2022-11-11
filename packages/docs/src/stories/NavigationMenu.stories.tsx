/* eslint-disable prettier/prettier */
import { NavigationMenu, NavigationMenuProps } from '@palamar-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Navigation Menu',
  component: NavigationMenu,
  args: {
    "aria-label": "Main Navigation",    
  }, 
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<NavigationMenuProps>

export const Primary: StoryObj<NavigationMenuProps> = {}

NavigationMenu.displayName = 'NavigationMenu'
