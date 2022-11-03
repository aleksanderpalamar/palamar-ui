/* eslint-disable prettier/prettier */
import { colors, fonts } from '@palamar-ui/tokens'
import {getContrast} from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{
        backgroundColor: color,
        padding: '2rem',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: fonts.default,
          color: getContrast(color, 'white') < 3.5 ? 'black' : 'white',
        }}>
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}