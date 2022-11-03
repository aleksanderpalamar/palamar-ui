/* eslint-disable prettier/prettier */
import { Avatar, AvatarProps } from '@palamar-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {},
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    }
  }   
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {
    src: 'https://github.com/aleksanderpalamar.png',
    alt: 'Avatar image github',
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  }
}