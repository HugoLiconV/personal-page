import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  button {
    background: transparent;
    border: none;
    outline: none;
  }
  li {
    display: flex;
    padding: 18px 10px;
  }

  li a {
    text-decoration: none;
  }

  /* mobile styles */
  @media (max-width: 768px) {
    z-index: 1;
    flex-flow: column;
    background-color: var(--bg-color);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li > a {
      color: var(--font-color);
      margin: 0 auto;
      display: block;
      text-align: center;
    }
  }
  .header-link {
    font-size: 3rem;
  }
`
const SideMenu = ({ open, onLinkClick, paths }) => {
  function renderLink({ to, name }) {
    return (
      <button onClick={onLinkClick} key={to}>
        <li>
          <Link to={to} activeClassName="active" partiallyActive={to !== "/"}>
            <h3 className="header-link">{name}</h3>
          </Link>
        </li>
      </button>
    )
  }

  return <Ul open={open}>{paths.map(renderLink)}</Ul>
}

export default SideMenu
