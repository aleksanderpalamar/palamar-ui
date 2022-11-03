/* eslint-disable prettier/prettier */
import { ComponentProps } from "react";
import { styled } from "../styles";

export const Flex = styled('div', {
  display: 'flex',
  gap: '$2',
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
    },
    wrap: {
      wrap: {
        flexWrap: 'wrap',
      },
      nowrap: {
        flexWrap: 'nowrap',
      },
    },
    flexgrow: {
      1: {
        flexGrow: 1,
      },
      2: {
        flexGrow: 2,
      },
      3: {
        flexGrow: 3,
      },
    },
    flexshrink: {
      1: {
        flexShrink: 1,
      },
      2: {
        flexShrink: 2,
      },
      3: {
        flexShrink: 3,
      },
    },
  }
})

export interface FlexProps extends ComponentProps<typeof Flex> {
  direction?: 'row' | 'column';
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end';
  wrap?: 'wrap' | 'nowrap';
  flexgrow?: 1 | 2 | 3;
  flexshrink?: 1 | 2 | 3;
}

Flex.displayName = 'Flex';