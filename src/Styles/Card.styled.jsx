import styled from 'styled-components'

const StyledCard = styled.div`
	display: grid;
	place-items: center;
	border-radius: 20px;
	padding: 1rem;
	img {
		justify-self: end;
	}
	h2 {
		font-size: 1.5rem;
		line-height: 30px;
		color: var(--lightCream);
		justify-self: start;
	}
	&.card1 {
		width: 343px;
		height: 364px;
		background-color: var(--galacticBlue);
		img {
			width: 128px;
			height: 192px;
		}
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
		background-color: var(--summerYellow);
		img {
			width: 64px;
			height: 64px;
		}
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
		background-color: var(--pink);
		img {
			width: 64px;
			height: 64px;
		}
		@media (min-width: 768px) {
			width: 155px;
		}
		@media (min-width: 1440px) {
			width: 164px;
		}
	}
	&.card4 {
		width: 343px;
		height: 158px;
		background-color: var(--lightRed);
		img {
			width: 128px;
			height: 64px;
		}
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
		background-color: var(--cyan);
		img {
			width: 160px;
			height: 64px;
		}
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
		background-color: var(--darkPurple);
		img {
			width: 128px;
			height: 64px;
		}
		@media (min-width: 768px) {
			width: 333px;
		}
		@media (min-width: 1440px) {
			width: 354px;
			height: 158px;
		}
	}
`

export default StyledCard
