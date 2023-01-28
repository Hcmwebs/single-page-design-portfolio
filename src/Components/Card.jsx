import React from 'react'
import { StyledCard } from '../Styles'

const Card = ({ id, img, className, title }) => {
	return (
		<StyledCard className ={className}>
			<img src={img} alt={title} />
			<h2>{title}</h2>
		</StyledCard>
	)
}

export default Card
