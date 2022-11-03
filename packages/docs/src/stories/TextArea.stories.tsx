/* eslint-disable prettier/prettier */
import { Box, Text, TextArea, TextAreaProps } from '@palamar-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Form/TextArea',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '$gray800',
          gap: '$2',
        }}>
          <Text size="sm">
            Observations
          </Text>
          {Story()}
        </Box>
      )
    }
  ]     
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations here...',
  },  
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}