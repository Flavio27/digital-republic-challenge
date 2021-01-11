import React, { useEffect } from 'react'
import { useParedeData } from '../../config/Parades'
import { ALTURA_MINIMA, TAMANHO_MAXIMO, TAMANHO_JANELA, TAMANHO_PORTA } from '../../config/Regras';
import Parede from './parede/Parede'
import Janela from './janela/Janela'
import AddPorta from './addPorta/AddPorta'
import './card.css'


function Card({ paredeId }) {
  const { paredes, setParedes } = useParedeData();

  const quantidadeDeTintaPorParede =
    paredes[paredeId].tamanho - ((paredes[paredeId].janelas * TAMANHO_JANELA) + (paredes[paredeId].portas * TAMANHO_PORTA))

  useEffect(() => {
    setParedes([...paredes], paredes[paredeId].tinta = quantidadeDeTintaPorParede)
  }, [paredes[paredeId].tamanho, paredes[paredeId].tamanhoDisponivel, paredes[paredeId].janelas, paredes[paredeId].portas])

  return (
    <div className={`card ${paredes[paredeId].tamanhoError && "border border-danger"}`}>
      <div className="card-body">
        <h2 className="card-title">Parede {paredeId + 1}</h2>
        <h3>Tamanho: {paredes[paredeId].tamanho.toFixed(2)}m²</h3>
        <br />
        <Parede paredeId={paredeId} />
        <br />
        {paredes[paredeId].tamanho >= ALTURA_MINIMA && paredes[paredeId].tamanho <= TAMANHO_MAXIMO && !paredes[paredeId].tamanhoError ?
          <React.Fragment>
            <h4>Adicionar</h4>
            <Janela paredeId={paredeId} />
            <AddPorta n={paredeId} />
            <br />
            <span>
              Espaço disponível: <strong>{paredes[paredeId].tamanhoDisponivel.toFixed(2)}m²</strong>
            </span>
          </React.Fragment> : ''
        }
      </div>
    </div>
  )
}

export default Card
