import React from 'react'
import { StyledButton } from '../Styles'

const Button = () => {
	return (
		<StyledButton
			primary
			as='a'
			href='#'
			rel='noopener noreferrer'
			target='_blank'>
			Free Consultation
		</StyledButton>
	)
}

export default Button
