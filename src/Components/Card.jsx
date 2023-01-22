import React from 'react'
import { StyledCard } from '../Styles'

const Card = ({ id, img, className, title }) => {
	return (
		<StyledCard className ={className}>
			<img src={img} alt={title} />
			<h3>{title}</h3>
		</StyledCard>
	)
}

export default Card
