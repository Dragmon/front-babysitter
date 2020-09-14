/*
catch error data:
error.response.data
error.response.status
error.response.headers
*/
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth0 } from '@auth0/auth0-react';
import firebase from '../../../firebase';
import 'react-toastify/dist/ReactToastify.css';
import '../../../sass/admin/formUser.scss';

const UserForm = () => {
  const initalState = {
    ID: '',
    ID_ROL: '1',
    DES_FULLNAME: '',
    DATE_BIRTH: '',
    DES_URL_IMAGE: '',
    DES_USER: '',
    DES_PASSWORD: '',
    DES_ADDRESS: '',
    DES_ADDRESS_LAT: '',
    DES_ADDRESS_LONG: '',
    NUM_PHONE: '',
    DES_EMAIL: localStorage.getItem('emailUser'),
    DES_COUNTRY: '',
    DES_STATE: '',
    DES_CITY: '',
    NUM_STATUS: '1',
  };

  const { logout } = useAuth0();

  const [datoInput, updateDatoInput] = useState({
    urlimages: '',
  });

  const [validateData, updateValidate] = useState({});

  const [userData, updateUserData] = useState({
    ...initalState,
  });

  const handleChange = (e) => {
    updateUserData({
      ...userData,
      [e.target.name]: [e.target.value],
    });
  };
  // user image upload to upload to firebase and get storage url
  const handleChangeImages = (e) => {
    const today = new Date();
    const date = `${today.getDate()}${today.getMonth()}${today.getFullYear()}${today.getHours()}${today.getMinutes()}${today.getSeconds()}`;
    const files = e.target.files;
    const bucketName = 'users';
    const file = files[0];
    const storageRef = firebase
      .storage()
      .ref(`${bucketName}/${date}${file.name}`);
    const uploadTask = storageRef.put(file);
    uploadTask.on(
      'state_changed',
      null,
      function (error) {
        console.log('Error al subir el archivo', error);
      },
      function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          updateDatoInput({
            ...datoInput,
            urlimages: downloadURL,
          });
        });
      }
    );
  };
  // input validation
  const validate = () => {
    let nameError = '';
    let emailError = '';
    let addressError = '';
    let phoneError = '';
    let datebirthError = '';
    let countryError = '';
    let stateError = '';
    let cityError = '';
    const expregText = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+$/u;
    const expregPrhone = /^\d{10}$/;
    const emptyMessage = 'El campo es obligatorio';
    const notText = 'Este campo solo admite texto';
    const invalidPhone = 'Numero teléfonico incorrecto';

    if (!userData.DES_FULLNAME) {
      nameError = emptyMessage;
    } else if (!expregText.test(userData.DES_FULLNAME)) {
      nameError = notText;
    }
    if (!userData.DES_EMAIL) {
      emailError = emptyMessage;
    }
    if (!userData.DATE_BIRTH) {
      datebirthError = emptyMessage;
    }
    if (!userData.DES_ADDRESS) {
      addressError = emptyMessage;
    }
    if (!userData.NUM_PHONE) {
      phoneError = emptyMessage;
    } else if (!expregPrhone.test(userData.NUM_PHONE)) {
      phoneError = invalidPhone;
    }
    if (!userData.DES_COUNTRY) {
      countryError = emptyMessage;
    }
    if (!userData.DES_STATE) {
      stateError = emptyMessage;
    } else if (!expregText.test(userData.DES_FULLNAME)) {
      nameError = notText;
    }
    if (!userData.DES_CITY) {
      cityError = emptyMessage;
    } else if (!expregText.test(userData.DES_FULLNAME)) {
      nameError = notText;
    }

    if (
      emailError ||
      nameError ||
      addressError ||
      phoneError ||
      datebirthError ||
      countryError ||
      stateError ||
      cityError
    ) {
      updateValidate({
        nameError: nameError,
        emailError: emailError,
        addressError: addressError,
        phoneError: phoneError,
        datebirthError: datebirthError,
        countryError: countryError,
        stateError: stateError,
        cityError: cityError,
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    userData.DES_URL_IMAGE = datoInput.urlimages;
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      const url = 'https://babys-api.herokuapp.com/api/users';
      try {
        const res = await axios.post(url, userData);
        console.log('Respuesta post: ', res);
        notify();
        setTimeout(() => {
          localStorage.clear();
          logout({
            returnTo: window.location.origin,
          });
        }, 5500);
      } catch (error) {
        const statusReturn = error.response.status;
        notify(statusReturn);
      }

      updateUserData({
        ...initalState,
      });
    }
  };
  // notificaction
  const notify = (status) => {
    if (status === 500) {
      toast.error('El usuario ya existe', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success('El usuario fue agregado con exito', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <div className='titleForm'>
        <h2>Registra tu datos</h2>
        <h5>
          Una vez que llenes tus datos deberas volver a iniciar sesión para
          poder utilizar este servicio.
        </h5>
      </div>
      <form className='formUser' onSubmit={handleSubmit}>
        <div className='formUser__div'>
          <label>Nombre</label>
          <input
            onChange={handleChange}
            className='inputForm'
            type='text'
            name='DES_FULLNAME'
            value={userData.DES_FULLNAME}
          />
          <div className='formUser__error'>{validateData.nameError}</div>
        </div>
        <div className='formUser__div'>
          <label>Dirección</label>
          <input
            onChange={handleChange}
            className='inputForm'
            type='text'
            name='DES_ADDRESS'
            value={userData.DES_ADDRESS}
          />
          <div className='formUser__error'>{validateData.addressError}</div>
        </div>
        <div className='formUser__div'>
          <label>Teléfono</label>
          <input
            onChange={handleChange}
            className='inputForm'
            type='tel'
            name='NUM_PHONE'
            maxLength='10'
            value={userData.NUM_PHONE}
          />
          <div className='formUser__error'>{validateData.phoneError}</div>
        </div>
        <div className='formUser__div'>
          <label>Fecha de nacimiento</label>
          <input
            onChange={handleChange}
            className='inputForm'
            type='date'
            name='DATE_BIRTH'
            maxLength='10'
            value={userData.DATE_BIRTH}
          />
          <div className='formUser__error'>{validateData.datebirthError}</div>
        </div>
        <div className='formUser__div'>
          <label>Email</label>
          <input
            onChange={handleChange}
            className='inputForm'
            type='email'
            name='DES_EMAIL'
            value={userData.DES_EMAIL}
          />
          <div className='formUser__error'>{validateData.emailError}</div>
        </div>
        <div className='formUser__div'>
          <label>Foto</label>
          <input
            onChange={handleChangeImages}
            className='inputForm'
            type='file'
            name='imagesData'
            value={userData.DES_URL_IMAGE}
          />
          <div className='formUser__error'>{validateData.imageError}</div>
        </div>
        <div className='formUser__div'>
          <label>País</label>
          <select
            className='selectForm'
            name='DES_COUNTRY'
            onChange={handleChange}
            value={userData.DES_COUNTRY}
          >
            <option value=''> -- Seleciona un país -- </option>
            <option value='México'> México </option>
            <option value='Colombia'> Colombia </option>
          </select>
          <div className='formUser__error'>{validateData.countryError}</div>
        </div>
        <div className='formUser__div'>
          <label>Estado</label>
          <input
            onChange={handleChange}
            className='inputForm'
            type='text'
            name='DES_STATE'
            value={userData.DES_STATE}
          />
          <div className='formUser__error'>{validateData.stateError}</div>
        </div>
        <div className='formUser__div'>
          <label>Ciudad</label>
          <input
            onChange={handleChange}
            className='inputForm'
            type='text'
            name='DES_CITY'
            value={userData.DES_CITY}
          />
          <div className='formUser__error'>{validateData.cityError}</div>
        </div>
        <input type='submit' value='Guardar' className='inputFormButton' />
      </form>
    </>
  );
};

export default UserForm;
