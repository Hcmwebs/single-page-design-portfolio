import React from 'react'
import { Card } from './index'
import { mainCard1, mainCard2, mainCard3, mainCard4 } from '../data/Data'
import { StyledMainCard, StyledCard, StyledFlex } from '../Styles'

const MainCard = () => {
	return (
		<>
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
		</>
	)
}

export default MainCard
