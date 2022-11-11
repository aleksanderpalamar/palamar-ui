/* eslint-disable prettier/prettier */
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { CaretDown } from 'phosphor-react'

import { keyframes, styled } from "../../styles";

export const enterFromRight = keyframes({
  from: { transform: "translateX(200px)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1 },
})

export const enterFromLeft = keyframes({
  from: { transform: "translateX(-200px)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1 },
})

export const exitToRight = keyframes({
  from: { transform: "translateX(0)", opacity: 1 },
  to: { transform: "translateX(200px)", opacity: 0 },
})

export const exitToLeft = keyframes({
  from: { transform: "translateX(0)", opacity: 1 },
  to: { transform: "translateX(-200px)", opacity: 0 },
})

export const scaleIn = keyframes({
  from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
  to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
})
export const scaleOut = keyframes({
  from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
  to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
})

export const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})
export const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

export const NavigationMenuRoot = styled(NavigationMenu.Root, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  zIndex: 1,
})

const itemStyles = {
  padding: '8px 12px',
  outline: 'none',
  userSelect: 'none',
  fontWeight: '$medium',
  lineHeight: 1,
  borderRadius: '$xs',
  fontSize: '$sm',
  fontFamily: '$default',
  color: '$palamar300',  

  '&:focus': {    
    boxShadow: '0 0 0 2px $palamar700',
  },
  '&:hover': {
    backgroundColor: '$gray100',
  }  
}

export const NavigationMenuList = styled(NavigationMenu.List, {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '$white',
  padding: 4,
  borderRadius: 6,
  boxShadow: '0 2px 10px $gray900',
  margin: 0,  
})

export const NavigationMenuItem = styled(NavigationMenu.Item, {
  all: 'unset',  
})

export const NavigationMenuTrigger = styled(NavigationMenu.Trigger, {
  all: 'unset',  
  ...itemStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
})

export const StyledCaret = styled(CaretDown, {
  position: 'relative',
  color: '$palamar500',
  top: 1,
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
})

export const NavigationMenuLink = styled(NavigationMenu.Link, {
  ...itemStyles,
  display: 'block',
  textDecoration: 'none',
  fontSize: 15,
  lineHeight: 1,
})

export const NavigationMenuContent = styled(NavigationMenu.Content, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  '@media only screen and (min-width: 600px)': { 
    width: 'auto', 
  },
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '250ms',
    animationTimingFunction: 'ease',
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight },
  },
})

export const NavigationMenuIndicator = styled(NavigationMenu.Indicator, {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 10,
  top: '100%',
  overflow: 'hidden',
  zIndex: 1,
  transition: 'width, transform 250ms ease',

  '@media (prefers-reduced-motion: no-preference)': {    
    '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
    '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
  },
})

export const StyledArrow = styled('div', {
  position: 'relative',
  top: '70%',
  backgroundColor: '$white',
  width: 10,
  height: 10,
  transform: 'rotate(45deg)',
  borderTopLeftRadius: 2,
})

export const NavigationMenuViewport = styled(NavigationMenu.Viewport, {
  position: 'relative',
  transformOrigin: 'top center',
  marginTop: 10,
  width: '100%',
  backgroundColor: '$white',
  borderRadius: 6,
  overflow: 'hidden',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  height: 'var(--radix-navigation-menu-viewport-width)',
  '@media only screen and (min-width: 600px)': {
    width: 'var(--radix-navigation-menu-viewport-width)'
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 300ms ease',
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  },
})

export const ContentList = styled('ul', {
  display: 'grid',
  padding: 22,
  margin: 0,
  columnGap: 10,
  listStyle: 'none',  

  variants: {
    layout: {
      one: {
        '@media only screen and (min-width: 600px)': {
          width: 500,          
          gridTemplateColumns: '0.75fr 1fr',          
        },
      },
      two: {
        '@media only screen and (min-width: 600px)': {
          width: 600,
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(3, 1fr)',
        },
      },
    },
  },
})

export const ListItem = styled('li', {  
  display: 'block',
  outline: 'none',
  textDecoration: 'none',
  userSelect: 'none',
  padding: 12,
  borderRadius: '$sm',
  fontSize: '$sm',
  lineHeight: 1,
})

export const LinkTitle = styled('h3', {
  fontWeight: '$bold',
  lineHeight: '$shorter',
  marginBottom: 5,
  color: '$palamar300',
})

export const LinkText = styled('p', {
  all: 'unset',
  color: '$gray900',
  lineHeight: '$short',
  fontWeight: 'initial',
})

export const ViewportPosition = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  top: '100%',
  left: 0,
  perspective: '2000px',
})