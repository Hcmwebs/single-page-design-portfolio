import styled from 'styled-components'

const StyledTitle = styled.div`
	width: max-content;
	position: relative;
	top: -20%;
	display: grid;
	place-items: center;
	h2 {
		font-size: 1.5rem;
		line-height: 1.875rem;
		text-align: center;
		color:var(--black);
		@media (min-width: 768px) {
			font-size: 2rem;
			line-height:2.5rem;
		}
	}
	.underline {
		content: '';
		width: 60%;
		height: 0.2rem;
		background-color: var(--black);
		position: absolute;
		bottom: -0.5rem;
		left: 50%;
		transform: translateX(-50%);
	}
`
export default StyledTitle
