'use client'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/images/logo.png'
import { Button } from '../components/Buttons'
import { FiLogIn, FiUserPlus } from 'react-icons/fi'

const StyledHeader = styled.header`
  .inner {
    align-items: center;
    height: 120px;
    div {
      width: 0;
      flex-grow: 1;
    }
    .logo-section {
      text-align: center;
      img {
        height: 120px;
        width: auto;
      }
    }
    .right {
      text-align: right;
    }
  }
`
const Header = () => {
  return (
    <StyledHeader>
      <div className="inner layout-width flex">
        <div className="left"></div>
        <div className="logo-section">
          <Link href={'/'}>
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="right">
          <Link href="/member/join">
            <Button type="button">
              <FiUserPlus />
              회원가입
            </Button>
          </Link>
          <Link href="/member/login">
            <Button type="button">
              <FiLogIn />
              로그인
            </Button>
          </Link>
        </div>
      </div>
    </StyledHeader>
  )
}
export default React.memo(Header)
