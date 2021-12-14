import React from 'react'
import { useParams } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'
import ProfileCont from './ProfileCont'

function SingleProfile() {
  const { id } = useParams()
  return (
    <div className="single-profile">
      <ProfileDetails id={id} />
      <h2 style={{ marginLeft: '0.8rem' }}>Friends:</h2>
      <ProfileCont
        url={`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/
`}
      />
    </div>
  )
}

export default SingleProfile
