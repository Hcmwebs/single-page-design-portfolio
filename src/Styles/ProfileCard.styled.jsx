import styled from 'styled-components'

const StyledProfileCard = styled.div`
	&.profileDetails {
		width: 100%;
		min-height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		gap: 2.5rem;

		@media (min-width: 768px) {
			flex-direction: row;
		}

		img {
			width: 300px;
			height: 300px;
			@media (min-width: 768px) {
				width: 331px;
				height: 331px;
			}
			@media (min-width: 1440px) {
				width: 445px;
				height: 445px;
			}
		}
		.card-body {
			width: min(100%, 100%);
			display: grid;
			place-items: center;
			gap: 1.5rem;
			@media (min-width: 768px) {
				width: min(100%, 323px);
				justify-items: start;
			}
			@media (min-width: 1440px) {
				width: min(100%, 540px);
				gap: 2rem;
			}

			h3 {
				font-size: 1.625rem;
				line-height: 2.0625rem;
				color: var(--black);
				text-align: center;
				@media (min-width: 768px) {
					font-size: 2rem;
					line-height: 2.5rem;
					text-align: left;
				}
				@media (min-width: 1440px) {
					font-size: 2.5rem;
					line-height: 3.125rem;
				}
			}
			p {
				font-size: 1rem;
				line-height: 1.625rem;
				text-align: center;

				@media (min-width: 768px) {
					font-size: 1.125rem;
					line-height: 1.75rem;
					text-align: left;
				}
			}
		}
	}
`
export default StyledProfileCard
