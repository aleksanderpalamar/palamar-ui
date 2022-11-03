/* eslint-disable prettier/prettier */
import { Button, ButtonProps } from '@palamar-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Components/Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: 'inline-radio',
    },
    size: {
      options: ['sm', 'md'],
      control: 'inline-radio',
    },
    disabled: {
      control: 'boolean',
    },
    onClick: { action: 'click' },
  },   
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {},
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create account',
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next
        <ArrowRight weight='bold'/>
      </>
    ),
  }
}