import React from 'react'
import { StyledContainer, StyledHeader } from '../Styles'
import { Nav, Hero } from './index'

const Header = () => {
	return (
		<StyledHeader>
			<StyledContainer>
				<Nav />
				<Hero />
			</StyledContainer>
		</StyledHeader>
	)
}

export default Header
