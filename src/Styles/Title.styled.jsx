import styled from 'styled-components'

const StyledTitle = styled.div`
	width: max-content;
	position: relative;
	display: grid;
	place-items: center;
	h2 {
		text-align: center;
	}
	.underline {
		content: '';
		width: 60%;
		height: 0.2rem;
		background-color: var(--mediumBrown);
		position: absolute;
		bottom: -0.5rem;
		left: 50%;
		transform: translateX(-50%);
	}
`
export default StyledTitle
