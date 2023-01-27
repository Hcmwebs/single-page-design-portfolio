import React from 'react'
import { StyledProfileCard} from '../Styles'
import {ButtonSec} from './index'


const Profile = ({ id, name, title, img, info, className }) => {
	return (
		<StyledProfileCard className={className}>
			<img src={img} alt={name} />
			<div className='card-body'>
				<h3>{title}</h3>
				<p>{info}</p>
				<ButtonSec/>
			</div>
		</StyledProfileCard>
	)
}

export default Profile
