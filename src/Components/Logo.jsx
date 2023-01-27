import React from 'react'
import { StyledLogo } from '../Styles'
import { motion } from 'framer-motion'
import { keyframes } from 'styled-components'

const Logo = () => {
	return (
		<>
			<motion.a
				href='#'
				whileHover={{ rotate: 180 }}
				transition={{ duration: 0.8 }}>
				<StyledLogo src='/Assets/logo.svg' alt='logo' />
			</motion.a>
		</>
	)
}

export default Logo
