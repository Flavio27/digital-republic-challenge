import React from 'react'
import { useParedeData } from '../../../data/Parades'
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import Alert from '@material-ui/lab/Alert'
import Collapse from '@material-ui/core/Collapse';
import './parede.css'

function Medidas({ n }) {
  const { paredes, setParedes } = useParedeData();
  function parede(tipo, valor) {
    setParedes([...paredes], paredes[n].janelas = 0)
    setParedes([...paredes], paredes[n].janelasError = false)
    setParedes([...paredes], paredes[n].portasError = false)
    if (tipo === 'comprimento') {
      setParedes([...paredes], paredes[n].comprimento = parseFloat(valor))
    } else {
      if (valor >= 2.20) {
        setParedes([...paredes], paredes[n].altura = parseFloat(valor))
        setParedes([...paredes], paredes[n].alturaError = false)
      } else {
        setParedes([...paredes], paredes[n].alturaError = true)
      }
    }
    if ((paredes[n].comprimento * paredes[n].altura) <= 15 && (paredes[n].comprimento * paredes[n].altura) >= 1) {
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
          Tamanho máximo <strong>15m²</strong>
          <br />
          Tamanho minimo <strong>1m²</strong>
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
            * Altura minima 2.20
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
