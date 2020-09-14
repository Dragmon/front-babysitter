import React from 'react';
import { useServer } from '../Contex/Server';
import Picker from '../Picker';
import '../../sass/modalHalfTime.scss';

const ModalHalfTime = (props) => {
  const { openHalfTime } = props;

  const { modalCloseHalf, buttonDay, knowMorning, knowLate, day } = useServer();

  if (openHalfTime === false) {
    return null;
  }

  const checkDay = () => {
    if (day === '') {
      alert('Por favor selecciona la jornada');
    } else {
      buttonDay();
    }
  };

  return (
    <main className='modalHalf'>
      <div className='modalHalf-card'>
        <div className='container__half'>
          <button onClick={modalCloseHalf} className='half__close'>
            <div className='half-close--half'> X </div>
          </button>
        </div>
        <h1>Selecciona la fecha y la jornada</h1>
        <section className='picker'>
          <Picker />
        </section>
        <section className='modalD-card--time'>
          <div className='time--morning'>
            <h2>8:00am - 12:00pm</h2>
            <button id='morning' value='Mañana' onClick={knowMorning}>
              Mañana
            </button>
          </div>
          <div className='time--morning'>
            <h2>2:00pm - 6:00pm</h2>
            <button id='late' value='Tarde' onClick={knowLate}>
              Tarde
            </button>
          </div>
        </section>
        <div className='modalHalf-card__bnt'>
          <button onClick={checkDay} className='modalHalf--btnHalf'>
            Continuar
          </button>
        </div>
      </div>
    </main>
  );
};

export default ModalHalfTime;
