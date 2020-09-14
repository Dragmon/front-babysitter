import React from 'react';
import { useServer } from '../Contex/Server';
import '../../sass/state.scss';

const State = () => {
  var { data, valueCapital, validatorCapital } = useServer();

  return (
    <div className='state'>
      <h4>Capital</h4>
      <form className='state__form'>
        <select className='id' id='capital' onChange={valueCapital}>
          <option value='DEFAULT'>Seleccione</option>
          {data === undefined
            ? ''
            : validatorCapital().map((country) => (
                <React.Fragment key={country.toString()}>
                  <option value={country}>{country}</option>
                </React.Fragment>
              ))}
        </select>
      </form>
    </div>
  );
};

export default State;
