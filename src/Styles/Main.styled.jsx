import styled from 'styled-components'

const StyledMain = styled.main`
	width: 100%;
	display: grid;
	gap: 2rem;
	place-items: center;

	section {
		width: 100%;
		padding: 2.5rem 1rem;
		min-height: 50vh;
		display: grid;
		place-items: center;
		outline: 2px solid lightcoral;

		.cards {
			width: min(100%, 100%);
			display: grid;
			place-items: center;
			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
			gap: 10px;
		}
		.card {
			width: min(100%, 100%);
			min-height: 300px;
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


				&.card-flex {
					display: flex;
				}
			}
			&.card2 {
				width: 100px;
				height: 100px;
				background-color: var(mediumBrown);
			}
		}
		&.three {
			background-color: var(--summerYellow);
		}
		&.four {
			background-color: aliceblue;
		}
		&.five {
			background-color: aliceblue;
		}
		&.six {
			background-color: aliceblue;
		}
	}
`

export default StyledMain
