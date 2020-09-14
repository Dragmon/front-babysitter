import React from 'react';
import { useServer } from '../Contex/Server';
import '../../sass/country.scss';

const Country = () => {
  var { data, valueCountry, onlyCountry } = useServer();

  return (
    <div className='country'>
      <h4>País</h4>
      <form className='country__form'>
        <select className='id' id='countryId' onChange={valueCountry}>
          <option value='DEFAULT'>Seleccione</option>
          {data.length === 0
            ? ''
            : onlyCountry.map((country) => (
                <React.Fragment key={country.toString()}>
                  <option value={country}>{country}</option>
                </React.Fragment>
              ))}
        </select>
      </form>
    </div>
  );
};

export default Country;
