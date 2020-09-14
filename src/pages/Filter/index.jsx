import React from 'react';
import CardNana from '../../components/CardNana';
import Country from '../../components/Country';
import State from '../../components/State';
import Capital from '../../components/Capital';
import { useServer } from '../../components/Contex/Server';
import '../../sass/filter.scss';

const Filter = () => {
  var { data, country, state, capital } = useServer();

  return (
    <div className='filter'>
      <div className='filter__items'>
        <Country />
        <State />
        <Capital />
      </div>
      {data.length === 0
        ? ''
        : country.length === 0 || country === 'DEFAULT'
        ? data.map((nana) => (
            <React.Fragment key={nana.id}>
              <CardNana
                id={nana.id}
                name={nana.name}
                description={nana.description}
                score={nana.score}
                specialty={nana.specialty}
                time={nana.time}
              />
            </React.Fragment>
          ))
        : state.length === 0 && capital.length === 0
        ? data
            .filter((nana) => nana.country === country)
            .map((nana) => (
              <React.Fragment key={nana.id}>
                <CardNana
                  id={nana.id}
                  name={nana.name}
                  description={nana.description}
                  score={nana.score}
                  specialty={nana.specialty}
                  time={nana.time}
                />
              </React.Fragment>
            ))
        : capital.length === 0
        ? data
            .filter((nana) => nana.country === country && nana.state === state)
            .map((nana) => (
              <React.Fragment key={nana.id}>
                <CardNana
                  id={nana.id}
                  name={nana.name}
                  description={nana.description}
                  score={nana.score}
                  specialty={nana.specialty}
                  time={nana.time}
                />
              </React.Fragment>
            ))
        : data
            .filter(
              (nana) =>
                nana.country === country &&
                nana.state === state &&
                nana.capital === capital
            )
            .map((nana) => (
              <React.Fragment key={nana.id}>
                <CardNana
                  id={nana.id}
                  name={nana.name}
                  description={nana.description}
                  score={nana.score}
                  specialty={nana.specialty}
                  time={nana.time}
                />
              </React.Fragment>
            ))}
    </div>
  );
};

export default Filter;
