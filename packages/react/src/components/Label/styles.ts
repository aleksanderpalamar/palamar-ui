import { styled } from "../../styles";

export const LabelContainer = styled('div', {
  display: 'flex',
  padding: '0 $5',
  flexWrap: 'wrap',
  gap: '$4',
  alignItems: 'center',
})

export const LabelText = styled('label', {
  fontSize: '$md',
  fontFamily: '$default',
  lineHeight: '$short',
  fontWeight: '$regular',
  color: '$white',
  userSelect: 'none',
})