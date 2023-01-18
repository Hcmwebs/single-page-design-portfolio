import styled from 'styled-components'

const StyledHeader = styled.header`
	width: 100%;
	display: grid;
	place-items: center;
	gap: 2rem;
	@media (min-width: 768px) {
		gap: 4rem;
	}
`

export default StyledHeader
