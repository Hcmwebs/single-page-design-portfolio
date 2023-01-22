import React from 'react'
import { mainCard1, mainCard2, mainCard3,mainCard4 } from '../data/Data'
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
					<StyledMainCard>
						{mainCard1.map((card) => {
							return <Card key={card.id} {...card} />
						})}
					</StyledMainCard>

					<StyledMainCard className='mainCard'>
						<StyledFlex>
							{mainCard2.map((card) => {
								return <Card key={card.id} {...card} />
							})}
						</StyledFlex>
						<StyledCard className='card4'>
							{mainCard3.map((card) => {
								return <Card key={card.id} {...card} />
							})}
						</StyledCard>
					</StyledMainCard>

					<StyledMainCard className='mainCard mainCard3'>
						{mainCard4.map((card) => {
							return <Card key={card.id} {...card} />
						})}
					</StyledMainCard>
				</section>
			</StyledMain>
		</StyledContainer>
	)
}

export default MainContent
