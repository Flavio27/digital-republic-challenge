import React from 'react'
import { useParedeData } from './Parades'

function AddParede() {
  const { paredes, setParedes } = useParedeData();

  function paredeAdd() {
    if (paredes.length < 4) {
      return (
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
      )
    }
  }
  return (
    paredeAdd()
  )
}

export default AddParede
