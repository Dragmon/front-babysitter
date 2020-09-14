/* eslint-disable react/prop-types */
import React from 'react';
import imgUser from '../../../assets/images/usuario.png';
import '../../../sass/admin/cardUser.scss';
import { Link } from 'react-router-dom';

const CardUser = ({ listusers }) => {
  return (
    <div className='listUsers'>
      {listusers.map((user) => {
        return (
          <div key={user.ID} className='cardUser'>
            <div className='cardUser__images'>
              <img
                src={user.DES_URL_IMAGE === null ? imgUser : user.DES_URL_IMAGE}
                alt={user.DES_FULLNAME}
              />
            </div>
            <div className='cardUser__data'>
              <p>{user.DES_FULLNAME}</p>
              <p>{user.DES_EMAIL}</p>
            </div>
            <div className='cardUser__button'>
              <Link to={`/listusers/${user.ID}/edit`}>
                <button type='button'>Editar</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardUser;
