import React, { useState, createContext, useContext } from 'react'

const dataContext = createContext()

export default function Paredes({ children }) {

  const [totalParede, setTotalParede ] = useState(0)
  const [paredes, setParedes] = useState([])

  return (
    <dataContext.Provider value={{ paredes, setParedes, totalParede, setTotalParede}}>
      {children}
    </dataContext.Provider>
  )
}

export function useParedeData() {
  const contextParede = useContext(dataContext);
  if (!contextParede) throw new Error("useParedeData must be used within a Paredes provider");
  const { paredes, setParedes, totalParede, setTotalParede } = contextParede;
  return { paredes, setParedes, totalParede, setTotalParede }

}