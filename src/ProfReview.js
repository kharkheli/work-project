import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './context'

function ProfReview({ name, lastName, prefix, title, imageUrl, id }) {
  const { path, setPath } = useGlobalContext()
  return (
    <Link
      to={`/user/${id}`}
      onClick={() =>
        setPath([
          ...path,
          { id: id, name: prefix + ' ' + name + ' ' + lastName },
        ])
      }
    >
      <article className="profile">
        <img src={imageUrl} alt={name} />
        <h3 className="name">{prefix + ' ' + name + ' ' + lastName}</h3>
        <p className="desc">{title}</p>
      </article>
    </Link>
  )
}

export default ProfReview
