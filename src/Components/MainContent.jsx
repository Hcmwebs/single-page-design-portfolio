import React from 'react'
import { MainCard } from './index'

import { StyledContainer, StyledMain } from '../Styles'

const MainContent = () => {
	return (
		<StyledContainer>
			<StyledMain>
				<section className='services'>
					<MainCard />
				</section>
			</StyledMain>
		</StyledContainer>
	)
}

export default MainContent