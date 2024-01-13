import React from 'react'
import styled from 'styled-components'

const NavContainer = styled.div`
width: 100vw;
z-index: 6;
position: absolute;
top: 0;

display: flex;
justify-content: center;
align-items: center;

`

const MenuItems = styled.ul`
position: relative;
height: ${props => props.theme.navHeight};
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
list-style: none;

display: flex;
justify-content: space-around;
align-items: center;

width: 100%;
padding: 0 10rem;
`


const MenuBtn = styled.li`
background-color: ${props => `rgba(${props.theme.textRgba}, 0.7)`};
list-style-type: none;
color: ${props => props.theme.body};
width: 15rem;
height: 2.5rem;

clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

position: absolute;
top: 100%;
left: 50%;
transform: translateX(-50%);

display: flex;
justify-content: center;
align-items: center;

font-size: ${props => props.theme.fontmd};
font-weight: 600;
text-transform: uppercase;

cursor: pointer;
`

const MenuItem = styled.li`
  text-transform: uppercase;
  color: ${props => props.theme.text};
`


const NavBar = () => {
  return (
    <NavContainer>
      <MenuItems>
      <MenuBtn>
        Menu
      </MenuBtn>
      <MenuItem>Home</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Shop</MenuItem>
      <MenuItem>New Arrival</MenuItem>
      </MenuItems>
    </NavContainer>
  )
}

export default NavBar