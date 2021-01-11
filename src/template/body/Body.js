import React from 'react';
import { useParedeData } from '../../config/Parades';
import Card from '../card/Card';
import Modal from '../modal/Modal';
import './body.css';

function Body() {
  const { paredes } = useParedeData();

  return (
    <div className="body">
      {paredes.map(parede =>
        <Card paredeId={parede.id} key={parede.id} />
      )}
      <div className="div-modal">
        <Modal />
      </div>
    </div>
  )
}

export default Body
