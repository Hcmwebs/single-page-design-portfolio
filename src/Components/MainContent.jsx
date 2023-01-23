import React from 'react'
import { MainCard,ProfileCard } from './index'

import { StyledContainer, StyledMainContent } from '../Styles'

const MainContent = () => {
	return (
		<StyledContainer>
			<StyledMainContent>
				<section className='services'>
					<MainCard />
				</section>
				<section className="profile">
					<ProfileCard />
				</section>
			</StyledMainContent>
		</StyledContainer>
	)
}

export default MainContent