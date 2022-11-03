/* eslint-disable prettier/prettier */
import { Text, Box, Grid, GridProps } from '@palamar-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Grid',
  component: Grid,
  args: {},
  argTypes: {
    columns: {
      control: {
        type: 'radio',
        options: [1, 2, 3, 4, 5],
      },
    },
    gap: {
      control: {
        type: null
      }
    },
    rows: {
      control: {
        type: null
      }
    },    
    children: {
      control: {
        type: null
      }
    }
  }   
} as Meta<GridProps>

export const Primary: StoryObj<GridProps> = {
  args: {
    columns: 2,
    rows: 5,
    gap: 2,
    children: (
      <>
        <Box
          css={{
            backgroundColor: '$blue300',                        
          }}
        >
          <Text css={{ color: '$gray900', }}>
            Box 1
          </Text>
        </Box>
        <Box
          css={{
            backgroundColor: '$palamar300',
          }}
        >
          <Text>Box 2</Text>
        </Box>
        <Box
          css={{
            backgroundColor: '$pink300',
          }}
        >
          <Text>Box 3</Text>
        </Box>
        <Box
          css={{
            backgroundColor: '$red300',
          }}
        >
          <Text>Box 3</Text>
        </Box>
        <Box
          css={{
            backgroundColor: '$yellow300',
          }}
        >
          <Text>Box 3</Text>
        </Box>
      </>
    )
  },
}