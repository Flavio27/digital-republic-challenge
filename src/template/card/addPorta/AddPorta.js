import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Alert from '@material-ui/lab/Alert'
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { useParedeData } from '../../../data/Parades'
import './addPorta.css'

function AddPorta({ n }) {
  const [open, setOpen] = useState(false);
  const { paredes, setParedes } = useParedeData();

  function porta(addOrSub) {
    if (addOrSub === 'add') {
      if (paredes[n].tamanhoDisponivel >= 1.52) {
        if (paredes[n].altura >= 2.20) {
          setParedes([...paredes], paredes[n].portas++)
          setParedes([...paredes], paredes[n].tamanhoDisponivel -= 1.52)
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
        setParedes([...paredes], paredes[n].tamanhoDisponivel += 1.52)
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
      <IconButton size="Large">
        <RemoveCircleIcon fontSize="inherit" className="sub"
          onClick={() => porta('sub')}
        />
      </IconButton>
      <span className="item">
        {(paredes[n].portas > 0 ? 'Portas ' : 'Porta ')}
            [{paredes[n].portas}]
          </span>
      <IconButton size="Large">
        <AddCircleIcon fontSize="inherit" className="add"
          onClick={() => porta('add')}
        />
      </IconButton>
      <br/>
      <h6 className="tamanho-porta">1.52m²</h6>
    </div>
  )
}

export default AddPorta
