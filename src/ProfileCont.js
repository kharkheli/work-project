import React, { useState, useEffect, useRef } from 'react'
import ProfReview from './ProfReview'

function ProfileCont({ url }) {
  const [loading, setLoading] = useState(true)
  const [thatsAll, setThatsAll] = useState(false)
  const [profiles, setProfiles] = useState([])
  const [page, setPage] = useState(1)
  const [link, setLink] = useState('')
  useEffect(() => {
    setLink(url + page + '/20')
  }, [url, page])
  useEffect(() => {
    setProfiles([])
  }, [url])
  const scroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      setLoading(true)
      setPage((oldpage) => oldpage + 1)
    }
  }

  useEffect(() => {
    if (!thatsAll) {
      window.addEventListener('scroll', scroll)
      return () => window.removeEventListener('scroll', scroll)
    }
  }, [thatsAll])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(link)
      if (response.status !== 200) {
        setThatsAll(true)
        setLoading(false)
        return
      }

      const data = await response.json()
      if (data.list.length == 0) {
        setThatsAll(true)
      }
      setProfiles([...profiles, ...data.list])
      setLoading(false)
    }
    getData()
  }, [link])
  return (
    <div>
      <section className="profile-cont">
        {profiles.map((profile) => {
          return <ProfReview key={profile.id} {...profile} />
        })}
      </section>
      <span style={{ display: 'block', textAlign: 'center', fontSize: '5vw' }}>
        {loading ? 'loading...' : null}
        {thatsAll ? 'thats all the users' : null}
      </span>
    </div>
  )
}

export default ProfileCont
