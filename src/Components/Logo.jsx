import React from 'react'
import logo from '../Assets/logo.svg'
import { StyledLogo } from '../Styles'

const Logo = () => {
	return (
		<>
			<a href='#'>
				<StyledLogo src={logo} alt='logo' />
			</a>
		</>
	)
}

export default Logo
