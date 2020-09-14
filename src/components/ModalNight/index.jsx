import React from 'react';
import { useServer } from '../Contex/Server';
import Picker from '../Picker';
import '../../sass/modalNight.scss';

const ModalNight = (props) => {
  const { openNight } = props;

  const { modalCloseNight, buttonDay } = useServer();

  if (openNight === false) {
    return null;
  }

  return (
    <main className='night'>
      <div className='night-card'>
        <div className='container__night'>
          <button onClick={modalCloseNight} className='night__close'>
            <div className='night-close--container'> X </div>
          </button>
        </div>
        <h1>Selecciona la fecha</h1>
        <section className='picker'>
          <Picker />
        </section>
        <section className='modal__night'>
          <button onClick={buttonDay} className='modal__night--button'>
            Continuar
          </button>
        </section>
      </div>
    </main>
  );
};

export default ModalNight;
