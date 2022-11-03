/* eslint-disable prettier/prettier */
import * as Switch from '@radix-ui/react-switch';
import { styled } from "../../styles";

export const SwitchContainer = styled(Switch.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: '$gray800',
  borderRadius: '$full',
  position: 'relative',
  boxShadow: `0 2px 10px $gray900`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': {
    boxShadow: `0 0 0 2px $gray900`,
  },
  '&[data-state="checked"]': {
    backgroundColor: '$gray900',
  },

  '&[data-state="unchecked"]': {
    backgroundColor: '$gray900'
  }
})

export const SwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: '$white',
  borderRadius: '$full',
  boxShadow: `0 2px 2px $black`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': {    
    transform: 'translateX(19px)' 
  },
})