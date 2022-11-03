/* eslint-disable prettier/prettier */
import { Box, BoxProps, Text } from '@palamar-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Box Component</Text>
      </>
    )
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }   
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {},
}