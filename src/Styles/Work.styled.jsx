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
		outline: 2px solid turquoise;
		@media (min-width: 768px) {
			gap: 2rem;
		}
		.slide {
			width: 270px;
			height: 180px;
			@media (min-width: 768px) {
				width: 540px;
				height: 360px;
			}
			img {
				border-radius: 10px;
			}
		}
	}
	.buttons{
		padding-block: 1.5rem;
	}
`

export default StyledWork
