import React from 'react';
import '../../sass/tags.scss';

const Tags = (props) => {
  const { name } = props;

  return (
    <div className='Tags'>
      <p>{name}</p>
    </div>
  );
};

export default Tags;
