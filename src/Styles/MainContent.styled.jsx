import styled from 'styled-components'

const StyledMain = styled.main`
	width: 100%;
	display: grid;
	gap: 0.625rem;
	place-items: center;

	section {
		width: 100%;
		padding: 2.5rem 0;
		min-height: 50vh;
		display: grid;
		place-items: center;
		outline: 2px solid lightcoral;

		&.services {
			display: grid;
			place-items: center;
			grid-template-columns:repeat(auto-fill, minmax(330px, 1fr));
			gap: 1.5rem;

		}
	}
`

export default StyledMain
