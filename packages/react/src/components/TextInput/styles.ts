/* eslint-disable prettier/prettier */
import { styled } from "../../styles";

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$palamar300'
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed'
  }
})

export const Prefix = styled('span', {
  color: '$gray400',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  backgroundColor: 'transparent',
  color: '$white',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  border: 'none',
  width: '100%',

  '&:focus': {
    outline: 'none'
  },

  '&:disabled': {
    cursor: 'not-allowed'
  },

  '&::placeholder': {
    color: '$gray400'
  }
})