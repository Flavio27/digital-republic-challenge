import React from 'react';
import { useParedeData } from '../../data/Parades'
import latas from '../../data/LatasTinta'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import latatinta from '../../assets/latatinta.png'
import './modal.css'

let paredesTotal = 0
let litroTinta = 5;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const { paredes, setParedes, totalParede, setTotalParede } = useParedeData();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    let abrir = true;
    for (let i in paredes) {
      if (paredes[i].tamanho < 2.2 || paredes[i].tamanhoError || paredes[i].alturaError) {
        setParedes([...paredes], paredes[i].tamanhoError = true)
        abrir = false;
      }
    }
    if (abrir) {
      setOpen(true);
    }
    somartotalParede()
  };

  const handleClose = () => {
    setOpen(false);
  };


  function somartotalParede() {
    paredesTotal = 0;

    for (let i in paredes) {
      paredesTotal += paredes[i].tinta;
      if (paredes[i].tamanho < 2.2) {
        setParedes([...paredes], paredes[i].tamanhoError = true)
      }
    }
    let totalTinta = paredesTotal / litroTinta;
    setTotalParede(totalTinta)
  }

  return (
    <div>
      <button type="button" onClick={handleOpen} className="btn btn-dark btn-lg btn-block">Calcular</button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" className="alert btn-light info" role="alert">Total de tinta</h2>
            <p id="transition-modal-description">
              Você irá precisar de <strong>{totalParede.toFixed(2)} litros</strong> de tinta para pintar a sala.
              </p>
            <ul className="list-group">
              <li className="list-group-item list-group-item-secondary">
                <h5 className="info">Opções de latas</h5>
              </li>
              {latas.map(lata => (
                <li key={lata.lata} className="list-group-item">
                  <h5>
                    <img src={latatinta} className="img-tinta" alt="lata-de-tinta" />
                    {(
                      (totalParede / lata.quantidade) > Math.round(totalParede / lata.quantidade) ?
                        ` ${Math.round(totalParede / lata.quantidade) + 1} ` :
                        ` ${Math.round(totalParede / lata.quantidade)} `)
                    }
                    {(Math.round(totalParede / lata.quantidade) > 1 ? 'Latas ' : 'Lata ')}
                  de {lata.quantidade} Litros.
              </h5>
                </li>
              ))}
            </ul>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}