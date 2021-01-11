import React, { useEffect } from 'react'
import { useParedeData } from '../../data/Parades'
import { alturaMinima, tamanhoMaximo, tamanhoJanela, tamanhoPorta } from '../../data/Regras';
import Medidas from './medidasParede/Parede'
import AddJanela from './addJanela/AddJanela'
import AddPorta from './addPorta/AddPorta'
import './card.css'


function Card({ n }) {
  const { paredes, setParedes } = useParedeData();

  useEffect(() => {
    setParedes([...paredes], paredes[n].tinta = (paredes[n].tamanho - ((paredes[n].janelas * tamanhoJanela) + (paredes[n].portas * tamanhoPorta))))
  }, [paredes[n].tamanho, paredes[n].tamanhoDisponivel, paredes[n].janelas, paredes[n].portas])

  return (
    <div className={`card ${paredes[n].tamanhoError && "border border-danger"}`}>
      <div className="card-body">
        <h2 className="card-title">Parede {n + 1}</h2>
        <h3>Tamanho: {paredes[n].tamanho.toFixed(2)}m²</h3>
        <br />
        <Medidas n={n} />
        <br />
        {paredes[n].tamanho >= alturaMinima && paredes[n].tamanho <= tamanhoMaximo && paredes[n].tamanhoError === false ?
          <React.Fragment>
            <h4>Adicionar</h4>
            <AddJanela n={n} />
            <AddPorta n={n} />
            <br />
            <span>
              Espaço disponível: <strong>{paredes[n].tamanhoDisponivel.toFixed(2)}m²</strong>
            </span>
          </React.Fragment> : ''
        }
      </div>
    </div>
  )
}

export default Card
