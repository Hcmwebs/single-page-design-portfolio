import styled from 'styled-components'

const StyledMain = styled.main`
	width: 100%;
	display: grid;
	place-items: center;

	section {
		width: 100%;
		padding: 2.5rem 0;
		min-height: 50vh;
		display: grid;
		place-items: center;
		outline: 2px solid lightcoral;

		&.services {
			grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
			gap: 1.5rem;
		}
		&.work {
			width: min(100%, var(--maxWidth));
			min-height: 400px;
			padding-inline: 1rem;
			gap: 2rem;
			overflow: hidden;
			@media (min-width: 768px) {
				gap: 3.5rem;
				padding-inline: 2.5rem;
			}
			@media (min-width: 1440px) {
				padding-inline: 10.25rem;
			}
		}
	}
`

export default StyledMain
