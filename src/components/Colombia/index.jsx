import React from 'react';
import ColombiaImg from '../../assets/images/Flags/colombia.jpg';
import '../../sass/colombia.scss';

const Colombia = () => {
  return (
    <div className='colombia'>
      <img className='colombia--img' src={ColombiaImg} alt='Colombia' />
    </div>
  );
};

export default Colombia;
