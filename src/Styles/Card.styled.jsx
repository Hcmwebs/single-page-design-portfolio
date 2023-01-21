import styled from 'styled-components'

const StyledCard = styled.div`
	width: 100%;
	min-height: 200px;
	margin: 0 auto;
	outline: 2px solid lightgreen;
	border-radius: 20px;
	display: grid;
	place-items: center;
	gap: 1rem;
	@media (min-width: 768px) {
		&.card-flex {
			width: 660px;
			display: flex;
			justify-content: space-between;
		}
	}
	.card1 {
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
		background-color: aliceblue;
	}
`
export default StyledCard
