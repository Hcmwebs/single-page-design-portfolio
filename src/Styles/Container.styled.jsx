import styled from 'styled-components'

const StyledContainer = styled.div`
	width: min(90vw, var(--maxWidth));
	margin: 0 auto;
	display: grid;
	place-items: center;
	@media (min-width: var(--desktop)) {
		width: min(95vw, var(--maxWidth));
	}
`

export default StyledContainer
