/* eslint-disable prettier/prettier */
import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  svg: {
    width: '$4',
    height: '$4',
  },
  
  '&:disabled': {    
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$palamar300',
        transition: 'background-color 0.2s ease-in-out',

        '&:not(:disabled):hover': {
          backgroundColor: '$palamar500',          
        },
        
        '&:disabled': {
          backgroundColor: '$gray200',          
        }
      },

      secondary: {
        color: '$palamar300',
        border: '1px solid $palamar300',
        transition: 'background-color 0.2s ease-in-out',

        '&:not(:disabled):hover': {
          backgroundColor: '$gray100',          
        },
        
        '&:disabled': {
          borderColor: '$gray200',
          color: '$gray200',
        }
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',          
        },
        
        '&:disabled': {          
          color: '$gray600',
        }
      },
    },
    size: {
      sm: {
        padding: '0 $2',
        height: 38,
      },  
      md: {
        padding: '0 $4',
        height: 46,
      },      
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'