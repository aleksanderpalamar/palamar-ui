/* eslint-disable prettier/prettier */
import { ComponentProps } from "react";
import { styled } from "../styles";

export const Grid = styled('div', {
  display: 'grid',
  width: 1120,
  maxWidth: '100%',
  variants: {
    columns: {
      1: { gridTemplateColumns: 'repeat(1fr)' },
      2: { gridTemplateColumns: 'repeat(2, 1fr)' },
      3: { gridTemplateColumns: 'repeat(3, 1fr)' },
      4: { gridTemplateColumns: 'repeat(4, 1fr)' },
      5: { gridTemplateColumns: 'repeat(5, 1fr)' },   
    },
    gap: {
      2: { gap: '2px' },
      4: { gap: '4px' },
      8: { gap: '8px' },
      16: { gap: '16px' },
    },
    rows: {
      1: { gridTemplateRows: 'repeat(1fr)' },
      2: { gridTemplateRows: 'repeat(2, 1fr)' },
      3: { gridTemplateRows: 'repeat(3, 1fr)' },
      4: { gridTemplateRows: 'repeat(4, 1fr)' },
      5: { gridTemplateRows: 'repeat(5, 1fr)' },
    },
  },
})

export interface GridProps extends ComponentProps<typeof Grid> {
  columns?: 1 | 2 | 3 | 4 | 5;
  gap?: 2 | 4 | 8 | 16;
  rows?: 1 | 2 | 3 | 4 | 5;
}

Grid.displayName = 'Grid'