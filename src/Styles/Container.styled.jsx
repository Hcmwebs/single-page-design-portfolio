import styled from 'styled-components'

const StyledContainer = styled.div`
	width: min(100vw, var(--maxWidth));
	padding-inline: 1rem;
	display: grid;
	place-items: center;
	background-color: var(--lightCream);
	@media (min-width: 768px) {
		padding-inline: 2.5rem;
	}
	@media (min-width: 1440px) {
		padding-inline: 10.25rem;
	}
`

export default StyledContainer
