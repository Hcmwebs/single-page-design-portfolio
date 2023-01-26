import styled from 'styled-components'

const StyledWork = styled.div`
	display: grid;
	place-items: center;
	overflow: hidden;

	.slider {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		@media (min-width: 768px) {
			gap: 2rem;
		}
		.slide {
			width: 270px;
			height: 180px;
			box-shadow: 0 2px 25px 2px rgba(0, 0, 0, 0.1);
			border-radius: 10px;
			overflow: hidden;
			position: absolute;
			top: 32%;
			left: 50%;
			transform: translate(-50%, -50%);
			transition: var(--transition-3);
			opacity: 0;
			&.activeSlide {
				opacity: 1;
				transform: translateX(-50%) scale(1.05);
				box-shadow: 0 4px 25px 2px rgba(0, 0, 0, 0.4);
			}
			&.nextSlide {
				opacity: 1;
				transform: translateX(60%);
			}
			&.prevSlide {
				opacity: 1;
				transform: translateX(-160%);
			}

			@media (min-width: 768px) {
				width: 540px;
				height: 360px;
			}
		}
	}
	.buttons {
		padding-block: 1.5rem;
		position: absolute;
		bottom: 3%;
		display: flex;
		gap: 1rem;

		button {
			outline: none;
			border: none;
			border-radius: 50%;
			padding: 1rem;
			background-color: var(--black);
			cursor: pointer;
			transition: var(--transition-1);
			&:hover {
				background-color: var(--galacticBlue);
				transform: scale(0.95);
			}
		}
	}
`

export default StyledWork
