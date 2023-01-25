import React, { useState, useEffect } from 'react'
import { StyledWork } from '../Styles'
import { work } from '../data/Data'

const Work = () => {
	const [slides, setSlides] = useState(work)
	const [index, setIndex] = useState(0)

	const nextSlide = () => {
		setIndex((oldIndex) => {
			let index = oldIndex + 1
			if (index > slides.length - 1) {
				index = 0
			}
			return index
		})
	}
	const prevSlide = () => {
		setIndex((oldIndex) => {
			let index = oldIndex - 1
			if (index < 0) {
				index = slides.length - 1
			}
			return index
		})
	}

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex((oldIndex) => {
				let index = oldIndex + 1
				if (index > slides.length - 1) {
					index = 0
				}
				return index
			})
		}, 15000)
		return () => {
			clearInterval(slider)
		}
	}, [index])

	return (
		<StyledWork>
			<div className='slider'>
				{slides.map((slide, slideIndex) => {
					const { id, img, name } = slide
					let slidePos = 'nextSlide'
					if (slideIndex === index) {
						slidePos = 'activeSlide'
					}
					if (
						slideIndex === index - 1 ||
						(index === 0 && slideIndex === slides.length - 1)
					) {
						slidePos = 'prevSlide'
					}
					return (
						<div className={`${slidePos} slide`} key={id}>
							<img src={img} alt={name} />
						</div>
					)
				})}
			</div>
			<div className='buttons'>
				<button type='button' onClick={prevSlide}>
					Prev
				</button>
				<button type='button' onClick={nextSlide}>
					next
				</button>
			</div>
		</StyledWork>
	)
}

export default Work
