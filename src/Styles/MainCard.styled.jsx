import styled from 'styled-components'

const StyledMainCard = styled.div`
	&.mainCard {
		min-height: 364px;
		margin: 0 auto;
		outline: 2px solid lightgreen;
		border-radius: 20px;
		display: flex;
		place-items: center;
		flex-direction: column;
		gap: 1.5rem;

		&.mainCard3 {
			@media (min-width: 768px) {
				min-height: 150px;
				flex-direction: row;
			}
			@media (min-width: 1440px) {
				min-height: 364px;
				flex-direction: column;
			}
		}
	}
`
export default StyledMainCard
