/* eslint-disable prettier/prettier */
import { Box, TextInput, TextInputProps, Text } from '@palamar-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Form/TextInput',
  component: TextInput,
  args: {},     
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your text here...',
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
        }}>
          <Text size="sm">
            Name
          </Text>
          {Story()}
        </Box>
      )
    }
  ]
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
        }}>
          <Text size="sm">
            E-mail
          </Text>
          {Story()}
        </Box>
      )
    }
  ]
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'https://',
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
        }}>
          <Text size="sm">
            Site
          </Text>
          {Story()}
        </Box>
      )
    }
  ]
}