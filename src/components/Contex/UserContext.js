/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserProvider = (props) => {
  const [idUser, saveIdUser] = useState(null);
  const [userInfo, saveUser] = useState({});

  // llamar a la api cunado tengamos un id

  useEffect(() => {
    const getUser = async () => {
      /* console.log('idUser context', idUser); */
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

  return (
    <UserContext.Provider value={{ userInfo, saveIdUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
