'use client'
import styled, { css } from 'styled-components'
import React from 'react'
type ContentBoxType = {
  children: React.ReactNode
  width?: number
  className?: string
}

const ContentBox: ContentBoxType = ({ children, className, _width }) => {
  return (
    <section className={'layout-width ' + className} width={_width}>
      {children}
    </section>
  )
}
const StyledContentBox = styled.div<ContentBoxType>`
  padding: 50px;
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}
`
export default React.memo(StyledContentBox)
