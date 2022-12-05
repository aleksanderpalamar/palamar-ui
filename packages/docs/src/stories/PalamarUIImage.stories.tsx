/* eslint-disable prettier/prettier */
import { PalamarUIImage, PalamarUIImageProps } from '@palamar-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/PalamarUIImage',
  component: PalamarUIImage,
  args: {
    src: 'https://media-exp1.licdn.com/dms/image/C4D16AQEFghRqut1Z3w/profile-displaybackgroundimage-shrink_350_1400/0/1662046788261?e=1674086400&v=beta&t=JmV_6BuckgR9WRk0VGU6I_2_8ttdx00zD_xngSHRZVY',
    width: '100%',
    height: '100%',
    alt: 'Image',
  }, 
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<PalamarUIImageProps>

export const Primary: StoryObj<PalamarUIImageProps> = {}