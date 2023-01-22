import React from 'react'
import { StyledContainer, StyledMain, StyledCard, StyledFlex } from '../Styles'

import { Card } from './index'

const MainContent = () => {
	return (
		<StyledContainer>
			<StyledMain>
				<section className='services'>
					<StyledCard className='mainCard'>
						<div className='card card1'>1</div>
					</StyledCard>

					<StyledCard className='mainCard'>
						<StyledFlex>
							<div className='card card2'>2</div>
							<div className='card card3'>3</div>
						</StyledFlex>
						<div className='card card4'>4</div>
					</StyledCard>

					<StyledCard className='mainCard mainCard3'>
						<div className='card card5'>5</div>
						<div className='card card6'>6</div>
					</StyledCard>
				</section>
			</StyledMain>
		</StyledContainer>
	)
}

export default MainContent
