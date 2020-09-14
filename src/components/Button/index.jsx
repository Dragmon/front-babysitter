import React from 'react';
import '../../sass/button.scss';
import { useServer } from '../Contex/Server';
import { Link } from 'react-router-dom';

const Button = (props) => {
  var { id, name } = props;

  var { valueId } = useServer();

  const onClick = () => {
    var elem = document.getElementById(id);
    valueId(elem.id);
  };

  return (
    <div className='Button'>
      <Link to={`/nana/${id}`}>
        <button id={id} onClick={onClick}>
          {name}
        </button>
      </Link>
    </div>
  );
};

export default Button;
