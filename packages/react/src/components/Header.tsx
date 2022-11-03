/* eslint-disable prettier/prettier */
import { ComponentProps } from "react";
import { styled } from "../styles";

export const Header = styled('header', {
  width: '100%',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',  
  backgroundColor: '$gray900', 

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$2',

  svg: {
    width: '$6',
    height: '$6',
  },
})

export interface HeaderProps extends ComponentProps<typeof Header> {}