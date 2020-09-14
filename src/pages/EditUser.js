/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
/* import { UserContext } from '../components/Contex/UserContext'; */
import MessageError from '../components/MessageError';
import Loading from '../components/Loading';
import EditUserForm from '../components/Admin/EditUserForm';
import axios from 'axios';
import '../sass/admin/listUsers.scss';

const EditUser = (props) => {
  const [userInfo, saveUser] = useState({});
  const idUser = props.match.params.id;

  useEffect(() => {
    const getUser = async () => {
      if (!idUser) return;

      const url = `https://babys-api.herokuapp.com/api/users/user/${idUser}`;

      try {
        const result = await axios.get(url);
        saveUser(result.data);
      } catch (error) {
        saveUser(error.response);
      }
    };
    getUser();
  }, [idUser]);

  const status = userInfo.status;

  switch (status) {
    case undefined:
      return <Loading />;
    case 200:
      return (
        <section className='sectionList'>
          <EditUserForm dataUser={userInfo.body[0]} />
        </section>
      );
    case 404:
      return (
        <section className='sectionList'>
          <MessageError error={userInfo} />
        </section>
      );
    default:
      return (
        <section className='sectionList'>
          <MessageError error={userInfo} />
        </section>
      );
  }
};

export default EditUser;
