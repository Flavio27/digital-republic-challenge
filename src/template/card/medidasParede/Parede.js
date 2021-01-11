import React from 'react';
import { useParedeData } from '../../../config/Parades';
import { TAMANHO_MAXIMO, TAMANHO_MINIMO, ALTURA_MINIMA } from '../../../config/Regras';
import { InputAdornment, Input, Collapse } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import './parede.css';

function Medidas({ n }) {
  const { paredes, setParedes } = useParedeData();

  function parede(tipo, valor) {
    setParedes([...paredes], paredes[n].janelas = 0)
    setParedes([...paredes], paredes[n].portas = 0)
    setParedes([...paredes], paredes[n].janelasError = false)
    setParedes([...paredes], paredes[n].portasError = false)
    if (tipo === 'comprimento') {
      setParedes([...paredes], paredes[n].comprimento = parseFloat(valor))
    } else {
      if (valor >= ALTURA_MINIMA) {
        setParedes([...paredes], paredes[n].altura = parseFloat(valor))
        setParedes([...paredes], paredes[n].alturaError = false)
      } else {
        setParedes([...paredes], paredes[n].alturaError = true)
      }
    }
    if ((paredes[n].comprimento * paredes[n].altura) <= TAMANHO_MAXIMO && (paredes[n].comprimento * paredes[n].altura) >= TAMANHO_MINIMO) {
      setParedes([...paredes], paredes[n].tamanho = paredes[n].comprimento * paredes[n].altura)
      setParedes([...paredes], paredes[n].tamanhoDisponivel = (paredes[n].comprimento * paredes[n].altura) / 2)
      setParedes([...paredes], paredes[n].tamanhoError = false)
    } else {
      setParedes([...paredes], paredes[n].tamanhoError = true)
    }
  }

  return (
    <React.Fragment>
      <h4>Medidas</h4>
      <Collapse in={paredes[n].tamanhoError}>
        <Alert severity="error">
          Tamanho máximo <strong>{TAMANHO_MAXIMO}m²</strong>
          <br />
          Tamanho minimo <strong>{TAMANHO_MINIMO}m²</strong>
        </Alert>
      </Collapse>
      <div className="input-div">
        <Input
          id="standard-adornment-weight"
          onChange={e => parede('altura', e.target.value)}
          type="number"
          placeholder="Altura"
          endAdornment={<InputAdornment position="end">M</InputAdornment>}
          aria-describedby="standard-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
        />
        <Collapse className="colapse" in={paredes[n].alturaError}>
          <span className="alert text-danger">
            * Altura minima {ALTURA_MINIMA}
          </span>
        </Collapse>
        <Input
          id="standard-adornment-weight"
          onChange={e => parede('comprimento', e.target.value)}
          type="number"
          placeholder="Comprimento"
          endAdornment={<InputAdornment position="end">M</InputAdornment>}
          aria-describedby="standard-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
        />
        <br />
      </div>
    </React.Fragment>

  )
}

export default Medidas
