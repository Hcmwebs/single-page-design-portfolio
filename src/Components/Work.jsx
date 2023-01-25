import React, { useState } from 'react'
import { StyledTitle, StyledWork } from '../Styles'
import { work } from '../data/Data'

const Work = () => {
	const [slides, setSlides] = useState(work)
	const [slidesIndex, setSlidesIndex] = useState(0)

	return (
		<StyledWork>
			<StyledTitle>
				<h2>My Work</h2>
				<div className='underline'></div>
			</StyledTitle>
			<div className='slider'>
				{slides.map((slide, index) => {
					const { id, img, name } = slide
					return (
						<div className='slide' key={id}>
							<img src={img} alt={name} className='slide' />
						</div>
					)
				})}
			</div>
		</StyledWork>
	)
}

export default Work
