/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import '../styles/tokens-grid.css';

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table
      className="tokens-grid"
    >
      <thead>
        <tr>
          <th>Token name</th>
          <th>Colors Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {
          Object.entries(tokens).map(([ key, value ]) => {
            return (
              <tr key={key}>
                <td>${key}</td>
                <td>{value}</td>
                {hasRemValue && (
                  <td>{Number(value.replace('rem', '')) * 16}px</td>
                )}
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
