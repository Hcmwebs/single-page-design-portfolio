import styled from 'styled-components';

const StyledFooter = styled.footer`
	article {
		padding-block: 4rem;
		display: grid;
		place-items: center;
		gap: 2.5rem;
		@media (min-width: 768px) {
			gap: 3.5rem;

		}
	}
	.contact {
		width: 100%;
		padding: 3rem 1.5rem;
		background-color: var(--black);
		display: grid;
		place-items: center;
		gap: 1.5rem;
		border-radius: 10px;
		box-shadow: 0 2px 15px 2px rgba(0, 0, 0, 0.3);
		@media (min-width: 768px) {
			padding: 3.75rem 4.75rem;
		}
		@media (min-width: 1440px) {
			padding: 3.75rem 4.75rem;
			grid-template-columns: repeat(2, 1fr);
		}

		.contactBody {
			display: grid;
			place-items: center;
			gap: 1.5rem;
			@media (min-width: 1440px) {
				justify-items: start;
			}
		}

		h2 {
			font-size: 1.625rem;
			line-height: 2.0625rem;
			text-align: center;
			color: var(--lightCream);
			@media (min-width: 768px) {
				font-size: 2rem;
				line-height: 2.5rem;
			}
			@media (min-width: 1440px) {
				font-size:2.5rem;
				line-height: 3.125rem;
				text-align: left;
			}
		}

		p {
			font-size: 1rem;
			line-height: 1.625rem;
			text-align: center;
			color: var(--lightCream);
			@media (min-width: 768px) {
				font-size: 1.125rem;
				line-height: 1.75rem;
			}
			@media (min-width: 1440px) {
				font-size: 1.125rem;
				line-height: 1.75rem;
				text-align: left;
			}
		}
	}
	.secNav{
		width: 100%;
	}
`

export default StyledFooter;