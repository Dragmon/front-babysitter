import React from 'react';
import '../../sass/flag.scss';
import { useServer } from '../Contex/Server';
import Colombia from '../Colombia';
import Mx from '../Mx';

var flags = ['México', 'Colombia'];

const Flag = () => {
  const { valueFlag, flagV } = useServer();

  return (
    <div className='flag'>
      <select className='flag--id' id='flag' onChange={valueFlag}>
        <option value='DEFAULT'>Seleccione</option>
        {flags.map((flag, index) => (
          <React.Fragment key={flag.toString()}>
            {<option value={flag}>{flag}</option>}
          </React.Fragment>
        ))}
      </select>
      {flagV === 'Colombia' ? <Colombia /> : null}
      {flagV === 'México' ? <Mx /> : null}
    </div>
  );
};

export default Flag;
