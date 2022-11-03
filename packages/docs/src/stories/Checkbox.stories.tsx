/* eslint-disable prettier/prettier */
import { Box, Checkbox, CheckboxProps, Text } from '@palamar-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            gap: '$2',
          }}
        >
          {Story()}
          <Text>Accept terms of use</Text>
        </Box>
      )
    }
  ],       
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}