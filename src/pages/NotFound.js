import React from 'react';
import ImgNotFound from '../assets/images/notfound/not-found.png';
import '../sass/notfound.scss';

const NotFound = () => (
  <section className='NotFound'>
    <div className='NotFound__text text-focus-in'>
      <h1>404</h1>
      <h2>
        ¡Shhhhhhhhh, guarda silencio!, el contenido que buscas no esta aquí
      </h2>
    </div>
    <div className='NotFound__img bounce-in-top'>
      <img src={ImgNotFound} alt='images not found' />
    </div>
  </section>
);

export default NotFound;
