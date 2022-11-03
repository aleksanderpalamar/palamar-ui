/* eslint-disable prettier/prettier */
import { Box, Text, Switch, SwitchProps} from '@palamar-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Switch',
  component: Switch,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '$gray800',
            gap: '$2',
          }}
        >
          <Text>
            ☀️ Light
          </Text>
          {Story()}
          <Text>
            🌑 Dark
          </Text>
        </Box>
      )
    }
  ],       
} as Meta<SwitchProps>

export const Primary: StoryObj<SwitchProps> = {}