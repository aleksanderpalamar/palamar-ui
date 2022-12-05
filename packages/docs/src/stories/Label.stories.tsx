/* eslint-disable prettier/prettier */
import { Label, LabelProps } from '@palamar-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Label',
  component: Label,
  args: {
    label: 'Name',
    htmlFor: 'name',
  }, 
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<LabelProps>

export const Primary: StoryObj<LabelProps> = {}