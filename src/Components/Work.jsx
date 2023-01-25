import React, { useState } from 'react'
import {StyledWork } from '../Styles'
import { work } from '../data/Data'
import {Title} from './index'

const Work = () => {
	const [slides, setSlides] = useState(work)
	const [slidesIndex, setSlidesIndex] = useState(0)

	return (
		<>
		<Title/>
		<StyledWork>
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
		</>
	)
}

export default Work
