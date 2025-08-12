'use client'
import styled, { css } from 'styled-components'
import color from '../styles/color'
import fontSize from '../styles/fontsize'
import ButtonType from '../types/ButtonType'
const commonStyle = css`
  width: 120px;
  height: 40px;
  border: 0;
  cursor: pointer;
  border-radius: 3px;
  line-height: 40px;
  & + & {
    margin-left: 5px;
  }
  svg {
    margin: 10px;
  }
`
export const Button = styled.button<ButtonType>`
  ${commonStyle}
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `} 
    ${({ color: c }) => {
    c = c ?? 'primary'
    const _color = color[c] ? color[c] : c
    return css`
      background: ${_color};
    `
  }}
  ${({ fontColor: fc }) => {
    fc = fc ?? 'light'
    return css`
      color: ${color[fc] ?? fc};
      svg {
        color: ${color[fc] ?? fc};
      }
    `
  }}
  ${({ fontSize: s }) => {
    s = s ?? 'large'
    const _fontSize = fontSize[s] ? fontSize[s] : s
    return css`
      font-size: ${_fontSize};
      svg {
        font-size: ${_fontSize};
      }
    `
  }}
`
