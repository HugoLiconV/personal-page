import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import SideMenu from "./sideMenu"

const StyledBurger = styled.div`
  display: flex;
  justify-content: flex-end;
`

const IconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 16px;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const BurgerIcon = ({ open }) => (
  <IconContainer open={open}>
    <div />
    <div />
    <div />
  </IconContainer>
)

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <StyledBurger onClick={() => setOpen(!open)}>
        <BurgerIcon open={open} />
      </StyledBurger>
      <SideMenu open={open} onLinkClick={() => setOpen(false)} />
    </header>
  )
}

export default Header
