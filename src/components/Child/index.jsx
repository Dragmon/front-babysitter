import React from 'react';
import { useServer } from '../Contex/Server';
import '../../sass/child.scss';

var children = ['Niño', 'Niña'];
var dataValueChild = [];

const Child = (props) => {
  const { indexAdd } = props;

  const { addChild, setChild } = useServer();

  const valueChild = () => {
    var selectChild = document.getElementById('child0');
    var selectChild1 = document.getElementById('child1');
    var selectChild2 = document.getElementById('child2');
    var selectChild3 = document.getElementById('child3');
    var selectChild4 = document.getElementById('child4');
    var selectChild5 = document.getElementById('child5');
    var selectChild6 = document.getElementById('child6');
    var selectChild7 = document.getElementById('child7');
    var selectChild8 = document.getElementById('child8');
    var selectChild9 = document.getElementById('child9');
    var selectChild10 = document.getElementById('child10');
    var selectChild11 = document.getElementById('child11');
    var selectChild12 = document.getElementById('child12');

    dataValueChild = [];

    for (let i = 0; i < addChild.length; i++) {
      if (i === 0) {
        dataValueChild.push(selectChild.value);
      } else if (i === 1) {
        dataValueChild.push(selectChild1.value);
      } else if (i === 2) {
        dataValueChild.push(selectChild2.value);
      } else if (i === 3) {
        dataValueChild.push(selectChild3.value);
      } else if (i === 4) {
        dataValueChild.push(selectChild4.value);
      } else if (i === 5) {
        dataValueChild.push(selectChild5.value);
      } else if (i === 6) {
        dataValueChild.push(selectChild6.value);
      } else if (i === 7) {
        dataValueChild.push(selectChild7.value);
      } else if (i === 8) {
        dataValueChild.push(selectChild8.value);
      } else if (i === 9) {
        dataValueChild.push(selectChild9.value);
      } else if (i === 10) {
        dataValueChild.push(selectChild10.value);
      } else if (i === 11) {
        dataValueChild.push(selectChild11.value);
      } else if (i === 12) {
        dataValueChild.push(selectChild12.value);
      }
      setChild(dataValueChild);
    }
  };

  return (
    <div className='child'>
      <select
        className='child--id'
        id={`child${indexAdd}`}
        onChange={valueChild}
      >
        <option value='DEFAULT'>Género</option>
        {children.map((child, index) => (
          <React.Fragment key={index}>
            {<option value={child}>{child}</option>}
          </React.Fragment>
        ))}
      </select>
    </div>
  );
};

export default Child;
