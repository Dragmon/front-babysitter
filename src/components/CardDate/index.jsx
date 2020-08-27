import React from 'react';
import { useServer } from '../Contex/Server';
import Picker from '../Picker';
import '../../sass/cardDate.scss';

const CardDate = (props) => {

  const { open } = props;
  const { modalClose, buttonDay } = useServer();

  if (open === false) {
    return null;
  }

  return (
    <main className='modal'>
      <div className='modal-card'>
        <div className='container__modal'>
          <button onClick={modalClose} className='button__close'>
            <div className='button-close--container'> X </div>
          </button>
        </div>
        <h1>Selecciona la fecha</h1>
        <section className='picker'>
          <Picker/>
        </section>
        <section className='modal__day'>
          <button onClick={buttonDay} className='modal__day--button'>Continuar</button>
        </section>
      </div> 
    </main>
  )
}

export default CardDate;