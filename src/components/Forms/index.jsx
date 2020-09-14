import React from 'react';
import { withFormik, Field, ErrorMessage, Form } from 'formik';
import Flag from '../Flag';
import Child from '../Child';
import Age from '../Age';
import { useServer } from '../Contex/Server';
import '../../sass/forms.scss';

var data = [];

const Forms = () => {
  var {
    addChildren,
    addChild,
    removeChildren,
    setForm,
    buttonCheck,
    childd,
    agee,
    flagV,
  } = useServer();

  const valueAll = () => {
    data = [];
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var recommendations = document.getElementById('recommendations').value;
    data.push(name);
    data.push(email);
    data.push(phone);
    data.push(address);
    data.push(recommendations);
    setForm(data);
    if (
      name === '' ||
      email === '' ||
      phone === '' ||
      address === '' ||
      recommendations === '' ||
      childd.length === 0 ||
      agee.length === 0 ||
      flagV === ''
    ) {
      alert('Por favor ingrese completos los valores');
    } else {
      buttonCheck();
    }
  };

  return (
    <Form>
      <div className='row'>
        <Field
          name='name'
          id='name'
          type='text'
          placeholder='Nombre y Apellido'
          className='input'
        />
        <ErrorMessage name='name'>
          {(message) => <div className='error'>{message}</div>}
        </ErrorMessage>
      </div>

      <div className='row'>
        <Field
          name='email'
          id='email'
          type='email'
          placeholder='Correo Electrónico'
          className='input'
        />
        <ErrorMessage name='email'>
          {(message) => <div className='error'>{message}</div>}
        </ErrorMessage>
      </div>

      <div className='phone'>
        <Flag />
        <div className='row--phone'>
          <Field
            name='phone'
            id='phone'
            type='tel'
            placeholder='Teléfono Móvil'
            className='input--phone'
          />
          <ErrorMessage name='phone'>
            {(message) => <div className='error'>{message}</div>}
          </ErrorMessage>
        </div>
      </div>

      {addChild.map((childAdd, index) => (
        <div key={index} className='child__add'>
          <Child indexAdd={index} />
          <Age indexAdd={index} />
          <button
            type='submit'
            onClick={addChildren}
            className='child__add--one'
          >
            Agregar
          </button>
          <button
            type='submit'
            onClick={removeChildren}
            className='child__add--one'
          >
            Eliminar
          </button>
        </div>
      ))}

      <div className='row'>
        <Field
          name='address'
          id='address'
          type='text'
          placeholder='Dirección'
          className='input'
        />
        <ErrorMessage name='address'>
          {(message) => <div className='error'>{message}</div>}
        </ErrorMessage>
      </div>

      <div className='row'>
        <Field
          name='recommendations'
          id='recommendations'
          type='text'
          placeholder='Recomendaciones'
          className='input'
        />
        <ErrorMessage name='recommendations'>
          {(message) => <div className='error'>{message}</div>}
        </ErrorMessage>
      </div>

      <div className='row button--form'>
        <button type='submit' onClick={valueAll}>
          Continuar
        </button>
      </div>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      name: '',
      email: '',
      phone: '',
      address: '',
      recommendations: '',
    };
  },

  validate(values) {
    const errors = {};
    if (Object.keys(errors).length) {
      throw errors;
    }
    if (!values.name) {
      errors.name = 'El nombre es requerido';
    } else if (values.name.length < 2) {
      errors.name = 'El nombre es demasiado corto';
    } else if (!values.email) {
      errors.email = 'El correo es requerido';
    } else if (!values.phone) {
      errors.phone = 'El teléfono es requerido';
    } else if (isNaN(values.phone)) {
      errors.phone = 'El teléfono debe ser numérico';
    } else if (values.phone.length < 7) {
      errors.phone = 'El teléfono debe contener más dígitos';
    } else if (!values.address) {
      errors.address = 'La dirección es requerida';
    } else if (values.address.length < 6) {
      errors.address = 'La dirección debe contener más información';
    } else if (!values.recommendations) {
      errors.recommendations = 'Deja una recomendación a la nana';
    } else if (values.recommendations.length < 10) {
      errors.recommendations =
        'Por favor deja una recomendación mas larga para la nana';
    }

    return errors;
  },

  handleSubmit(values, formikBag) {
    formikBag.setSubmitting(false);
  },
})(Forms);
