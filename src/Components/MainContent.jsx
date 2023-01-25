import React from 'react'
import { MainCard, ProfileCard, Work } from './index'

import { StyledContainer, StyledMainContent } from '../Styles'

const MainContent = () => {
	return (
		<StyledMainContent>
			<StyledContainer>
				<section className='services'>
					<MainCard />
				</section>
			</StyledContainer>
			<StyledContainer>
				<section>
					<ProfileCard />
				</section>
			</StyledContainer>
			<StyledContainer fullWidth>
				<section className='work'>
					<Work />
				</section>
			</StyledContainer>
		</StyledMainContent>
	)
}

export default MainContent
