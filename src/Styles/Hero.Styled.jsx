import styled from 'styled-components'

export const StyledHero = styled.div`
	width: min(100%, 100%);
	display: grid;
	place-content: center;
	gap: 1rem;
	@media (min-width: 768px) {
    width: min(100%, 690px);
		gap: 1.75rem;
	}
	@media (min-width: 1440px) {
    width: min(100%, 752px);
		gap: 2rem;
	}

	h1 {
		font-size: 2.25rem;
		font-weight: var(--bold);
		line-height: 2.8rem;
		color: var(--black);
		text-align: center;
		@media (min-width: 768px) {
			font-size: 2.75rem;
			line-height: 3.44rem;
		}
		@media (min-width: 1440px) {
			font-size: 3.5rem;
			line-height: 4.5rem;
		}
	}

	p {
		font-size: 1rem;
		font-weight: var(--medium);
		line-height: 1.625rem;
    padding-inline:1.75rem;
		text-align: center;
		color: var(--mediumBrown);
		@media (min-width: 768px) {
			font-size: 1.125rem;
			line-height: 1.75rem;
      padding-inline: 3.625rem;
		}
	}
`

export default StyledHero
