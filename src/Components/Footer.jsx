import React from 'react'
import { StyledContainer, StyledFlex, StyledFooter } from '../Styles'
import { ButtonPrim, ButtonSec, Logo } from './index'

const Footer = () => {
	return (
		<StyledFooter>
			<StyledContainer>
				<article>
					<div className='contact'>
						<div className='contactBody'>
							<h2>Book a call with me</h2>
							<p>
								I’d love to have a chat to see how I can help you. The best
								first step is for us to discuss your project during a free
								consultation. Then we can move forward from there.
							</p>
						</div>
						<ButtonSec />
					</div>
					<div className='secNav'>
						<StyledFlex>
							<Logo />
							<ButtonPrim />
						</StyledFlex>
					</div>
				</article>
			</StyledContainer>
		</StyledFooter>
	)
}

export default Footer
