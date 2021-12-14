import React, { useState, useContext } from 'react'
const PathContext = React.createContext()

const PathProvider = ({ children }) => {
  const [path, setPath] = useState([])
  return (
    <PathContext.Provider value={{ path: path, setPath: setPath }}>
      {children}
    </PathContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(PathContext)
}

export { PathContext, PathProvider }
