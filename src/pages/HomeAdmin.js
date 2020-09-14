import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/admin/homeAdmin.scss';

const HomeAdmin = () => (
  <section className='sectionMenu'>
    <div className='sectionMenu__title'>
      <h2>Menu</h2>
    </div>
    <div className='menuAdmin'>
      <Link to='/newuser'>
        <button className='menuAdmin__button'>Nuevo Usuario</button>
      </Link>
      <Link to='/listusers'>
        <button className='menuAdmin__button'>Editar Usuario</button>
      </Link>
      <Link to='/newnana'>
        <button className='menuAdmin__button'>Nueva Nana</button>
      </Link>
      <Link to='/'>
        <button className='menuAdmin__button'>Editar Nana</button>
      </Link>
    </div>
  </section>
);

export default HomeAdmin;
