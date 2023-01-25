import styled from 'styled-components'

const StyledWork = styled.div`
	width: 100%;
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
		.slide {
			width: 270px;
			height: 180px;
			img {
				width: 100%;
			}
		}
	}
`

export default StyledWork
