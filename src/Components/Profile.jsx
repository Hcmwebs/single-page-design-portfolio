import React from 'react'
import { StyledProfileCard } from '../Styles'

const Profile = ({ id, name, title, img, info,className }) => {
	return (
		<StyledProfileCard className={className}>
			<img src={img} alt={name} />
			<div className='card-body'>
				<p>{title}</p>
				<p>{info}</p>
			</div>
		</StyledProfileCard>
	)
}

export default Profile
