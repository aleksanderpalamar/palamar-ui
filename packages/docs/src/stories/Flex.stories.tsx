/* eslint-disable prettier/prettier */
import { Text, Flex, FlexProps, Box } from '@palamar-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Flex',
  component: Flex,
  args: {},
  argTypes: {
    direction: {
      control: {
        type: 'radio',
        options: ['row', 'column'],
      },
      defaultValue: 'row',
    },
    align: {
      control: {
        type: 'radio',
        options: ['start', 'center', 'end'],
      },
      defaultValue: 'center',
    },
    justify: {
      control: {
        type: 'radio',
        options: ['start', 'center', 'end'],
      },
      defaultValue: 'center',
    },
    children: {
      control: {
        type: null
      }
    }
  }   
} as Meta<FlexProps>

export const Primary: StoryObj<FlexProps> = {
  args: {
    direction: 'row',
    flexshrink: 1,
    flexgrow: 1,
    align: 'center',
    justify: 'center',
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
      </>
    )
  },
}

export const Column: StoryObj<FlexProps> = {
  args: {
    direction: 'column',
    children: (
      <>
        <Box
          css={{
            backgroundColor: '$blue300',            
          }}
        >
          <Text css={{ color: '$gray900', }}>Box 1</Text>
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
      </>
    )
  }
}