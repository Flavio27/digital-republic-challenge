import React, { useEffect } from 'react'
import { useParedeData } from '../../data/Parades'
import Card from '../card/Card'
import Modal from '../modal/Modal'
import './body.css'

function Body() {
  const { paredes, setParedes} = useParedeData();
  function addParede() {
    setParedes(paredes => [...paredes, {
      id: paredes.length,
      tamanho: 0,
      tamanhoError: false,
      tamanhoDisponivel: 0,
      tamanhoDisError: false,
      comprimento: 0,
      altura: 0,
      alturaError: false,
      janelas: 0,
      janelasError: false,
      portas: 0,
      portasError: false,
      tinta: 0,
      ok: false,
    }])
  }

  useEffect(() => {
    if (paredes.length < 4)
      addParede()
  }, [paredes])

  return (
    <div className="body">
      {paredes.map(parede =>
        <Card n={parede.id} key={parede.id} />
      )}
      <div className="div-modal">
      <Modal />
      </div>
    </div>


  )
}

export default Body
