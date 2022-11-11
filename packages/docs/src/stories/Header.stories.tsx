/* eslint-disable prettier/prettier */
import { Box, Header, HeaderProps, Text } from '@palamar-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { User } from 'phosphor-react'

export default {
  title: 'Components/Header',
  component: Header,
  args: {
    children: (
      <>
        <Box css={{ display: 'flex', alignItems: 'center', gap: '$2' }}>
          <img src="https://www.palamarsolutionit.com.br/Ignite-logo.svg" alt="" />
          <Text size="lg">Palamar-UI</Text>
        </Box>        
        <Box
          css={{
            gap: '$2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >                   
          <User weight='bold'/>
          <Text as="a" href="#" size="lg" css={{textDecoration: 'none'}}>            
            Login
          </Text>
        </Box>         
      </>
    )
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }   
} as Meta<HeaderProps>

export const Primary: StoryObj<HeaderProps> = {}

Header.displayName = 'Header'