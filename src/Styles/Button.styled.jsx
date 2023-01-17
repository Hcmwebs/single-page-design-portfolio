import styled from 'styled-components'

const StyledButton = styled.button`
	border-radius: 28px;
	border: none;
	padding: 0.4rem 1.6rem;
	font-size: 1.125rem;
	font-weight: var(--bold);
	font-family: inherit;
	color: var(--lightCream);
	background-color: ${({ primary }) =>
		primary ? 'var(--black)' : 'var(--lightRed)'};
	cursor: pointer;
	transition: var(--transition-2);

	&:hover {
		background-color: ${({ primary }) =>
			primary ? 'var(--galacticBlue)' : 'var(--summerYellow)'};
		transform: scale(0.95);
	}
`

export default StyledButton
