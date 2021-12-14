import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Lost() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '4vw', margin: '4vw' }}>
        You got Lost My Friend
      </h1>
      <Link
        to="/"
        style={{
          display: 'block',
          textAlign: 'center',
          margin: '2vw',
          fontSize: '4vw',
          width: 'fit-content',
          margin: 'auto',
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        Country Roads Take Me Home
      </Link>
    </div>
  )
}

export default Lost
