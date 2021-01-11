import React from 'react';
import { useParedeData } from '../../data/Parades';
import addParede from '../../data/AddParede';
import Card from '../card/Card';
import Modal from '../modal/Modal';
import './body.css';

function Body() {
  const { paredes } = useParedeData();
  addParede();
  return (
    <div className="body">
      {paredes.map(parede =>
        <Card n={parede.id} key={parede.id} />
      )}
      <div className="div-modal">
        <Modal />
      </div>
    </div>
  )
}

export default Body
