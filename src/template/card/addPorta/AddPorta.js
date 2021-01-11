import React, { useState } from 'react';
import { useParedeData } from '../../../config/Parades';
import { ALTURA_MINIMA, TAMANHO_PORTA } from '../../../config/Regras';
import {IconButton, Collapse } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import './addPorta.css';

function AddPorta({ n }) {
  const [open, setOpen] = useState(false);
  const { paredes, setParedes } = useParedeData();
  
  function porta(addOrSub) {
    if (addOrSub === 'add') {
      if (paredes[n].tamanhoDisponivel >= TAMANHO_PORTA) {
        if (paredes[n].altura >= ALTURA_MINIMA) {
          setParedes([...paredes], paredes[n].portas++)
          setParedes([...paredes], paredes[n].tamanhoDisponivel -= TAMANHO_PORTA)
          setOpen(false)
        } else {
          setParedes([...paredes], paredes[n].portasError = true)
          setOpen(true)
        }
      } else {
        setParedes([...paredes], paredes[n].portasError = true)
        setOpen(true)
      }
    } else {
      if (paredes[n].portas !== 0) {
        setParedes([...paredes], paredes[n].portas--)
        setParedes([...paredes], paredes[n].tamanhoDisponivel += TAMANHO_PORTA)
        setParedes([...paredes], paredes[n].portasError = false)
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
          onClick={() => porta('sub')}
        />
      </IconButton>
      <span className="item">
        {(paredes[n].portas > 0 ? 'Portas ' : 'Porta ')}
            [{paredes[n].portas}]
          </span>
      <IconButton size="medium">
        <AddCircleIcon fontSize="inherit" className="add"
          onClick={() => porta('add')}
        />
      </IconButton>
      <br/>
      <h6 className="tamanho-porta">{TAMANHO_PORTA}m²</h6>
    </div>
  )
}

export default AddPorta
