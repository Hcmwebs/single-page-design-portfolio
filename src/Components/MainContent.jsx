import React from 'react'
import { StyledContainer, StyledMain, StyledMainCard, StyledFlex } from '../Styles'

import { Card } from './index'

const MainContent = () => {
	return (
		<StyledContainer>
			<StyledMain>
				<section className='services'>
					<StyledMainCard className='mainCard'>
						<div className='card card1'>1</div>
					</StyledMainCard>

					<StyledMainCard className='mainCard'>
						<StyledFlex>
							<div className='card card2'>2</div>
							<div className='card card3'>3</div>
						</StyledFlex>
						<div className='card card4'>4</div>
					</StyledMainCard>

					<StyledMainCard className='mainCard mainCard3'>
						<div className='card card5'>5</div>
						<div className='card card6'>6</div>
					</StyledMainCard>
				</section>
			</StyledMain>
		</StyledContainer>
	)
}

export default MainContent
