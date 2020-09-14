import React from 'react';
import RegisterForm from '../components/Client/RegisterForm';
import '../sass/admin/listUsers.scss';

const index = () => {
  return (
    <section className='sectionList'>
      <RegisterForm />
    </section>
  );
};

export default index;
