import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState({})
  const [success, setSuccess] = useState(true)

  const getData = async () => {
    const response = await fetch(url)
    if (response.status != 200) {
      setSuccess(false)
    }
    const data = await response.json()
    setProfile(data)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [url])
  return { success, loading, profile }
}
