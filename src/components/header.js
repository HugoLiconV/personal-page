import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SideMenu from "./sideMenu"

const BurgerContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
`

const IconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  top: 15px;
  right: 20px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #ffffff;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const HeaderContainer = styled.header`
  .active {
    color: var(--accent-color);
    border-bottom: none;
    box-shadow: none;
  }
`

const BurgerIcon = ({ open }) => (
  <IconContainer open={open}>
    <div />
    <div />
    <div />
  </IconContainer>
)

const BurgerButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  z-index: 50;
`

const CurrentPageTitle = styled.h1`
  margin: 0;
`

const Header = ({ path }) => {
  const [open, setOpen] = useState(false)
  const paths = [
    {
      to: "/",
      name: "About",
    },
    {
      to: "/blog/",
      name: "Blog",
    },
    {
      to: "/reading/",
      name: "Reading",
    },
    {
      to: "/notes/",
      name: "Notes",
    },
  ]

  const currentPage = paths.find(({ to }) => {
    const isHome = path === "/"
    if (isHome) {
      return to === "/"
    }
    return path.includes(to) && to !== "/"
  }) || {}

  return (
    <HeaderContainer>
      <BurgerContainer>
        <CurrentPageTitle>
          <Link
            to={currentPage.to}
            activeClassName="active"
            partiallyActive={currentPage.to !== "/"}
          >
            {currentPage.name}
          </Link>
        </CurrentPageTitle>
        <BurgerButton onClick={() => setOpen(!open)}>
          <BurgerIcon open={open} />
        </BurgerButton>
      </BurgerContainer>
      <SideMenu open={open} onLinkClick={() => setOpen(false)} paths={paths} />
    </HeaderContainer>
  )
}

export default Header
