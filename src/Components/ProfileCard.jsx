import React from 'react'
import { profile } from '../data/Data'
import { Profile } from './index'

const ProfileCard = () => {
	return (
		<>
			{profile.map((profile) => {
				return <Profile key={profile.id} {...profile} />
			})}
		</>
	)
}

export default ProfileCard
