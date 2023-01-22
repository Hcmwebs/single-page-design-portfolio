import styled from 'styled-components'

const StyledCard = styled.div`
	&.mainCard {
		min-height: 364px;
		margin: 0 auto;
		outline: 2px solid lightgreen;
		border-radius: 20px;
		display: grid;
		place-items: center;
		gap: 1.5rem;

		&.mainCard3 {
			display: flex;
			flex-direction: column;
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

	.card {
		display: grid;
		place-items: center;
		border-radius: 20px;
		&.card1 {
			width: 343px;
			height: 364px;
			background-color: aliceblue;
			@media (min-width: 768px) {
				width: 333px;
			}
			@media (min-width: 1440px) {
				width: 354px;
			}
		}
		&.card2 {
			width: 159px;
			height: 182px;
			background-color: salmon;
			@media (min-width: 768px) {
				width: 155px;
			}
			@media (min-width: 1440px) {
				width: 164px;
			}
		}
		&.card3 {
			width: 159px;
			height: 182px;
			background-color: cyan;
			@media (min-width: 768px) {
				width: 155px;
			}
			@media (min-width: 71440px) {
				width: 164px;
			}
		}
		&.card4 {
			width: 343px;
			height: 158px;
			background-color: lightGreen;
			@media (min-width: 768px) {
				width: 333px;
			}
			@media (min-width: 1440px) {
				width: 354px;
			}
		}
		&.card5 {
			width: 343px;
			height: 182px;
			background-color: turquoise;
			@media (min-width: 768px) {
				width: 333px;
			}
			@media (min-width: 1440px) {
				width: 354px;
			}
		}
		&.card6 {
			width: 343px;
			height: 182px;
			background-color: orange;
			@media (min-width: 768px) {
				width: 333px;
			}
			@media (min-width: 1440px) {
				width: 354px;
				height: 158px;
			}
		}
	}
`
export default StyledCard
