import React from 'react'
import logoImg from '../data/Data'
import { StyledLogo } from '../Styles'

const Logo = () => {
	return (
		<>
			<a href='#'>
				<StyledLogo src={logoImg} alt='logo' />
			</a>
		</>
	)
}

export default Logo
