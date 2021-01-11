import React, { useEffect } from 'react'
import { useParedeData } from '../../data/Parades'
import './card.css'
import Medidas from './medidasParede/Parede'
import AddJanela from './addJanela/AddJanela'
import AddPorta from './addPorta/AddPorta'

function Card({ n }) {

  const { paredes, setParedes } = useParedeData();

  useEffect(() => {
    setParedes([...paredes], paredes[n].tinta = (paredes[n].tamanho - ((paredes[n].janelas * 2.40) + (paredes[n].portas * 1.52))))
  }, [paredes[n].tamanho, paredes[n].tamanhoDisponivel, paredes[n].janelas, paredes[n].portas])

  return (
    <div className={`card ${paredes[n].tamanhoError && "border border-danger"}`}>
      <div className="card-body">
        <h2 className="card-title">Parede {n + 1}</h2>
        <h3>Tamanho: {paredes[n].tamanho.toFixed(2)}m²</h3>
        <br />
        <Medidas n={n} />
        <br />
        {paredes[n].tamanho >= 2.2 && paredes[n].tamanho <= 15 && paredes[n].tamanhoError === false ?
          <React.Fragment>
            <h4>Adicionar</h4>
            <AddJanela n={n} />
            <AddPorta n={n} />
            <br />
            <span>Espaço disponível: <strong>{paredes[n].tamanhoDisponivel.toFixed(2)}m²</strong></span>
          </React.Fragment> : ''
        }
      </div>
    </div>
  )
}

export default Card
