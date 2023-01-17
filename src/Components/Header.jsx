import React from 'react'
import { StyledContainer, StyledHeader } from '../Styles'
import { Nav, Hero } from './index'

const Header = () => {
	return (
		<StyledContainer>
			<StyledHeader>
				<Nav />
				<Hero />
			</StyledHeader>
		</StyledContainer>
	)
}

export default Header
