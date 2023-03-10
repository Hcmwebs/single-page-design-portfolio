import React from 'react'
import { Card } from './index'
import { mainCard1, mainCard2, mainCard3, mainCard4 } from '../data/Data'
import { StyledMainCard, StyledFlex } from '../Styles'

const MainCard = () => {
	return (
		<>
			<StyledMainCard className='mainCard'>
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

				{mainCard3.map((card) => {
					return <Card key={card.id} {...card} />
				})}
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
