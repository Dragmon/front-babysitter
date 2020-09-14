import React, { useContext, useState } from 'react';
import { UserContext } from '../../Contex/UserContext';

const UserInfo = () => {
  const [dataUpdate, saveDataUpdate] = useState({
    nameUser: '',
    phoneNumber: '',
    /*
    idUser: '',
    address:'',
    email:'',
    statusUser:'',
    */
  });
  const { userFound } = useContext(UserContext);
  console.log('userFound', userFound);

  const getDataUpdate = (e) => {
    saveDataUpdate({
      ...dataUpdate,
      [e.target.name]: e.target.value,
    });
    console.log('data actualizada', dataUpdate);
  };
  return (
    <>
      <div>
        <h2>{userFound.ID}</h2>
        <h2>{userFound.DES_FULLNAME}</h2>
        <h2>{userFound.NUM_PHONE}</h2>
        <h2>{userFound.DES_ADDRESS}</h2>
        <h2>{userFound.DES_EMAIL}</h2>
        <h2>{userFound.NUM_STATUS}</h2>
      </div>
      <form className='formUser'>
        <label>
          Nombre:
          <input
            name='nameUser'
            type='text'
            value={userFound.DES_FULLNAME}
            onChange={getDataUpdate}
          />
        </label>
        <label>
          Teléfono:
          <input
            name='phoneNumber'
            type='text'
            value={userFound.NUM_PHONE}
            onChange={getDataUpdate}
          />
        </label>
      </form>
    </>
  );
};

export default UserInfo;
