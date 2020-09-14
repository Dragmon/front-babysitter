import React from 'react';
import '../../sass/cardNana.scss';
import Button from '../Button';
import Tags from '../Tags';
import Star from '../Star/index';

const cardNana = (props) => {
  const { id, name, description, score, specialty, time } = props;

  return (
    <div className='container'>
      <section className='container__card'>
        <article className='imgButton'>
          <img
            src={require('../../assets/images/Nanas/maria-sandobal.png')}
            alt={name}
          />
          <Button id={id} name={'Más Información'} />
        </article>
        <article className='article'>
          <div className='nameScore'>
            <h2>{name}</h2>
            <div>{<Star score={score}></Star>}</div>
          </div>
          <div className='data__nana'>
            <h2>Jornada:</h2>
            <Tags name={time} />
            <h2>Especialidad:</h2>
            <Tags name={specialty} />
          </div>
          <p className='article--description'>{description}</p>
        </article>
      </section>
    </div>
  );
};

export default cardNana;
