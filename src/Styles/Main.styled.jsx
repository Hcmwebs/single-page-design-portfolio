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
					height: 150px;

					display: flex;
					justify-content: space-between;
				}
			}

			.card1 {
				width: 100%;
				height: 100%;
				display: grid;
				place-items: center;
				gap: 1rem;
				border-radius: 15px;
				background-color: aliceblue;

				&.card2 {
					width: 150px;
					height: 180px;
					background-color: var(--mediumBrown);
					color:var(--lightCream)
				}

			}
			.card-flex {
				width: 100%;
					display: flex;
					justify-content: space-between;
					gap:1rem;
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
