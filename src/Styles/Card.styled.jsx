import styled from 'styled-components'

const StyledCard = styled.div`
	&.mainCard {
		min-height: 200px;
		margin: 0 auto;
		outline: 2px solid lightgreen;
		border-radius: 20px;
		display: grid;
		place-items: center;
		gap: 1rem;
		@media (min-width: 768px) {
			&.mainCard3 {
				width: 690px;
				display: flex;
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
		}
		&.card2 {
			width: 159px;
			height: 182px;
			background-color: salmon;
		}
		&.card3 {
			width: 159px;
			height: 182px;
			background-color: cyan;
		}
		&.card4 {
			width: 343px;
			height: 159px;
			background-color: lightGreen;
		}
		&.card5 {
			width: 343px;
			height: 182px;
			background-color: turquoise;
		}
		&.card6 {
			width: 343px;
			height: 182px;
			background-color: orange;
		}
	}
`
export default StyledCard
