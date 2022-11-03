/* eslint-disable prettier/prettier */
import { Heading, HeadingProps } from '@palamar-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Typography/Heading',
  component: Heading,
  args: {
    children: 'Example Heading Element',
  },   
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'sm',
        'md',
        'lg',        
        '2xl',
        '4xl',
        '6xl',
      ],
      control: 'inline-radio',
    },
  },
}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'By default the Heading component is rendered as an `h2`, but you can change this by passing an `as` prop.',
      }
    }
  }
}