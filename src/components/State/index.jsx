import React from 'react';
import { useServer } from '../Contex/Server';
import '../../sass/state.scss';

const State = () => {
  var { data, valueState, validatorState } = useServer();

  return (
    <div className='state'>
      <h4>Estado</h4>
      <form className='state__form'>
        <select className='id' id='state' onChange={valueState}>
          <option value='DEFAULT'>Seleccione</option>
          {data.length === 0
            ? ''
            : validatorState().map((state) => (
                <React.Fragment key={state.toString()}>
                  {<option value={state}>{state}</option>}
                </React.Fragment>
              ))}
        </select>
      </form>
    </div>
  );
};

export default State;
