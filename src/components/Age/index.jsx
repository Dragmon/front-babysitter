import React from 'react';
import { useServer } from '../Contex/Server';
import '../../sass/age.scss';

var children = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var dataValueAge = [];

const Age = (props) => {
  const { indexAdd } = props;

  const { addChild, setAge } = useServer();

  const valueAge = () => {
    var selectAge = document.getElementById('age0');
    var selectAge1 = document.getElementById('age1');
    var selectAge2 = document.getElementById('age2');
    var selectAge3 = document.getElementById('age3');
    var selectAge4 = document.getElementById('age4');
    var selectAge5 = document.getElementById('age5');
    var selectAge6 = document.getElementById('age6');
    var selectAge7 = document.getElementById('age7');
    var selectAge8 = document.getElementById('age8');
    var selectAge9 = document.getElementById('age9');
    var selectAge10 = document.getElementById('age10');
    var selectAge11 = document.getElementById('age11');
    var selectAge12 = document.getElementById('age12');

    dataValueAge = [];

    for (let i = 0; i < addChild.length; i++) {
      if (i === 0) {
        dataValueAge.push(parseInt(selectAge.value));
      } else if (i === 1) {
        dataValueAge.push(parseInt(selectAge1.value));
      } else if (i === 2) {
        dataValueAge.push(parseInt(selectAge2.value));
      } else if (i === 3) {
        dataValueAge.push(parseInt(selectAge3.value));
      } else if (i === 4) {
        dataValueAge.push(parseInt(selectAge4.value));
      } else if (i === 5) {
        dataValueAge.push(parseInt(selectAge5.value));
      } else if (i === 6) {
        dataValueAge.push(parseInt(selectAge6.value));
      } else if (i === 7) {
        dataValueAge.push(parseInt(selectAge7.value));
      } else if (i === 8) {
        dataValueAge.push(parseInt(selectAge8.value));
      } else if (i === 9) {
        dataValueAge.push(parseInt(selectAge9.value));
      } else if (i === 10) {
        dataValueAge.push(parseInt(selectAge10.value));
      } else if (i === 11) {
        dataValueAge.push(parseInt(selectAge11.value));
      } else if (i === 12) {
        dataValueAge.push(parseInt(selectAge12.value));
      }
      setAge(dataValueAge);
    }
  };

  return (
    <div className='age'>
      <select className='age--id' id={`age${indexAdd}`} onChange={valueAge}>
        <option value='DEFAULT'>Edad</option>
        {children.map((age, index) => (
          <React.Fragment key={index}>
            {<option value={age}>{age}</option>}
          </React.Fragment>
        ))}
      </select>
    </div>
  );
};

export default Age;
