import React from 'react';
import { useParedeData } from '../../../config/Parades';
import { TAMANHO_MAXIMO, TAMANHO_MINIMO, ALTURA_MINIMA } from '../../../config/Regras';
import { InputAdornment, Input, Collapse } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import './parede.css';

function Parede({ paredeId }) {
  const { paredes, setParedes } = useParedeData();

  function resetItens() {
    setParedes([...paredes], paredes[paredeId].janelas = 0)
    setParedes([...paredes], paredes[paredeId].portas = 0)
    setParedes([...paredes], paredes[paredeId].janelasError = false)
    setParedes([...paredes], paredes[paredeId].portasError = false)
  }

  function atualizarMetrosQuadrados() {
    const totalDeMetrosQuadrados = paredes[paredeId].comprimento * paredes[paredeId].altura;
    if (totalDeMetrosQuadrados <= TAMANHO_MAXIMO && totalDeMetrosQuadrados >= TAMANHO_MINIMO) {
      setParedes([...paredes], paredes[paredeId].tamanho = totalDeMetrosQuadrados)
      setParedes([...paredes], paredes[paredeId].tamanhoDisponivel = (totalDeMetrosQuadrados) / 2)
      setParedes([...paredes], paredes[paredeId].tamanhoError = false)
    } else {
      setParedes([...paredes], paredes[paredeId].tamanhoError = true)
    }
  }

  function adicionarAltura(tamanho) {
    resetItens()
    if (tamanho >= ALTURA_MINIMA) {
      setParedes([...paredes], paredes[paredeId].altura = parseFloat(tamanho))
      setParedes([...paredes], paredes[paredeId].alturaError = false)
    } else {
      setParedes([...paredes], paredes[paredeId].alturaError = true)
    }
    atualizarMetrosQuadrados()
  }

  function adicionarComprimento(tamanho) {
    resetItens()
    setParedes([...paredes], paredes[paredeId].comprimento = parseFloat(tamanho))
    atualizarMetrosQuadrados()
  }

  return (
    <React.Fragment>
      <h4>Medidas</h4>
      <Collapse in={paredes[paredeId].tamanhoError}>
        <Alert severity="error">
          Tamanho máximo <strong>{TAMANHO_MAXIMO}m²</strong>
          <br />
          Tamanho minimo <strong>{TAMANHO_MINIMO}m²</strong>
        </Alert>
      </Collapse>
      <div className="input-div">
        <Input
          id="standard-adornment-weight"
          onChange={e => adicionarAltura(e.target.value)}
          type="number"
          placeholder="Altura"
          endAdornment={<InputAdornment position="end">M</InputAdornment>}
          aria-describedby="standard-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
        />
        <Collapse className="colapse" in={paredes[paredeId].alturaError}>
          <span className="alert text-danger">
            * Altura minima {ALTURA_MINIMA}
          </span>
        </Collapse>
        <Input
          id="standard-adornment-weight"
          onChange={e => adicionarComprimento(e.target.value)}
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

export default Parede
