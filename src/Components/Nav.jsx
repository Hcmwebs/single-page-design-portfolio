import React from 'react'
import { StyledContainer } from '../Styles'
import { Logo, Button } from './index'
import styled from 'styled-components'

const Nav = () => {
	return (
		<StyledNav>
			<Logo />
			<Button />
		</StyledNav>
	)
}

const StyledNav = styled.nav`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	border: 1px solid red;
`
export default Nav
