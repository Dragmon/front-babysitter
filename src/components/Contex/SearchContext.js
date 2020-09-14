/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserProvider = (props) => {
  const [userFound, saveUser] = useState([]);
  const [valueStatus, statusFound] = useState();
  const [search, searchUser] = useState({
    selectduser: '',
  });
  const [consult, saveConsult] = useState(false);

  const { selectduser } = search;

  useEffect(() => {
    if (consult) {
      const getUser = async () => {
        const url = `https://babys-api.herokuapp.com/api/users/user/${selectduser}`;
        const result = await axios.get(url);
        statusFound(result.status);
        saveUser(result.data.body[0]);
      };
      getUser();
    }
  }, [search]);

  return (
    <UserContext.Provider
      value={{ userFound, valueStatus, searchUser, saveConsult }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
