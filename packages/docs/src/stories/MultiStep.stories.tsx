/* eslint-disable prettier/prettier */
import { Box, MultiStep, MultiStepProps } from '@palamar-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Form/MultiStep',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
          backgroundColor: '$gray800',
        }}>          
          {Story()}
        </Box>
      )
    }
  ]     
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},  
}

export const Full: StoryObj<MultiStepProps> = {
  args: {    
    currentStep: 4
  }
}