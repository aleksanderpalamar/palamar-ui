/* eslint-disable prettier/prettier */
import { Text, TextProps } from '@palamar-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Example Text Element',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: 'inline-radio',
    },
  },   
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {},
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Example Text Element strong',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story: 'By default the Text component is rendered as an `p`, but you can change this by passing an `as` prop.',
      }
    }
  },
}