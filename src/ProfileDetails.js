import React from 'react'
import { useFetch } from './fetchApi'
import { Link } from 'react-router-dom'

import { useGlobalContext } from './context'

function ProfileDetails({ id }) {
  const { path } = useGlobalContext()
  const url =
    'http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/' + id
  const { success, loading, profile } = useFetch(url)
  return (
    <>
      {loading ? (
        'Loading'
      ) : success ? (
        <article className="prof-details">
          <img src={profile.imageUrl} alt={profile.name} />
          <fieldset className="info">
            <legend>info</legend>
            <h3 className="name">{`${profile.prefix} ${profile.name} ${profile.lastName}`}</h3>
            <i>{profile.title}</i>
            <br />
            <br />
            <p>
              <span className="underline">Email:</span>{' '}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
            <p>
              <span className="underline">Ip Address:</span> {profile.ip}
            </p>
            <p>
              <span className="underline"> Job Area:</span> {profile.jobArea}
            </p>
            <p>
              <span className="underline">Job Type:</span> {profile.jobType}
            </p>
          </fieldset>
          <fieldset className="address">
            <legend>address</legend>
            <b>
              {profile.company.name} {profile.company.suffix}
            </b>
            <p>
              <span className="underline">City:</span> {profile.address.city}
            </p>
            <p>
              <span className="underline">Country:</span>{' '}
              {profile.address.country}
            </p>
            <p>
              <span className="underline">State:</span> {profile.address.state}
            </p>
            <p>
              <span className="underline">Street Adress:</span>{' '}
              {profile.address.streetAddress}
            </p>
            <p>
              <span className="underline">ZIP:</span> {profile.address.state}
            </p>
          </fieldset>
        </article>
      ) : (
        <h1>Sorry, problem getting the user data</h1>
      )}
      <p style={{ padding: '0.2vw', marginLeft: '0.6vw' }}>
        {path.map((visit, index) => {
          return (
            <span key={index}>
              <Link style={{ color: '#551A8B' }} to={`/user/${visit.id}`}>
                {visit.name}
              </Link>
              {' > '}
            </span>
          )
        })}
      </p>
    </>
  )
}

export default ProfileDetails
