import React from 'react'
import {
	StyledContainer,
	StyledMain,
	StyledMainCard,
	StyledCard,
	StyledFlex,
} from '../Styles'

import { Card } from './index'

const MainContent = () => {
	return (
		<StyledContainer>
			<StyledMain>
				<section className='services'>
					<StyledMainCard className='mainCard'>
						<StyledCard className='card card1'>1</StyledCard>
					</StyledMainCard>

					<StyledMainCard className='mainCard'>
						<StyledFlex>
							<StyledCard className='card card2'>2</StyledCard>
							<StyledCard className='card card3'>3</StyledCard>
						</StyledFlex>
						<StyledCard className='card card4'>4</StyledCard>
					</StyledMainCard>

					<StyledMainCard className='mainCard mainCard3'>
						<StyledCard className='card card5'>5</StyledCard>
						<StyledCard className='card card6'>6</StyledCard>
					</StyledMainCard>
				</section>
			</StyledMain>
		</StyledContainer>
	)
}

export default MainContent
