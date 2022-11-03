/* eslint-disable prettier/prettier */
import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles/index'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: 'transparent',  
  color: '$white',  
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
