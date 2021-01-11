import React, { useState } from 'react';
import { useParedeData } from '../../../data/Parades';
import {tamanhoJanela, comprimentoMinimo} from '../../../data/Regras';
import {IconButton, Collapse } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import './addJanela.css';

function AddJanela({ n }) {
  const [open, setOpen] = useState(false);
  const { paredes, setParedes } = useParedeData();

  function janela(addOrSub) {
    if (addOrSub === 'add') {
      if (paredes[n].tamanhoDisponivel >= tamanhoJanela && paredes[n].comprimento >= comprimentoMinimo) {
        setParedes([...paredes], paredes[n].janelas++)
        setParedes([...paredes], paredes[n].tamanhoDisponivel -= tamanhoJanela)
        setParedes([...paredes], paredes[n].janelasError = false)
        setOpen(false)
      }else{
        setParedes([...paredes], paredes[n].janelasError = true)
        setOpen(true)
      }
    } else {
      if (paredes[n].janelas !== 0) {
        setParedes([...paredes], paredes[n].janelas--)
        setParedes([...paredes], paredes[n].tamanhoDisponivel += tamanhoJanela)
        setParedes([...paredes], paredes[n].janelasError = false)
        setOpen(false)
      }
    }
  }
  
  return (
    <div className="add-item">
      {
        <Collapse in={open}>
          <Alert severity="warning"
            action={
              <IconButton
                aria-label="close" color="inherit" size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Espaço insuficiente!
          </Alert>
        </Collapse>
      }
      <IconButton size="medium">
        <RemoveCircleIcon fontSize="inherit" className="sub"
          onClick={() => janela('sub')}
        />
      </IconButton>
      <span className="item">
        {(paredes[n].janelas > 0 ? 'Janelas ' : 'Janela ')}
      [{paredes[n].janelas}]
      </span>
      <IconButton size="medium">
        <AddCircleIcon fontSize="inherit" className="add"
          onClick={() => janela('add')}
        />
      </IconButton>
      <br/>
      <h6 className="tamanho-janela">{tamanhoJanela.toFixed(2)}m²</h6>
    </div>
  )
}

export default AddJanela
