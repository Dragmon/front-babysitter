import React from 'react';
import Tags from '../Tags';
import Star from '../Star';
import { Link } from 'react-router-dom';
import { useServer } from '../Contex/Server';
import '../../sass/nanaData.scss';

const NanaData = (props) => {
  const {
    id,
    name,
    description,
    // score,
    time,
    studies,
    experiences,
    skills,
    country,
    state,
    capital,
    specialty,
    averageScore,
  } = props;

  var { modalOpen } = useServer();

  const toOpen = () => {
    var openContratar = document.getElementById(id).value;
    modalOpen(parseInt(openContratar));
  };

  return (
    <div className='nana'>
      <article className='nana__photo'>
        <img
          src={require('../../assets/images/Nanas/maria-sandobal.png')}
          alt={name}
        />
        <div className='button'>
          <button id={id} value={id} onClick={toOpen}>
            Contratar
          </button>
          <Link to='/nana'>
            <button>Regresar</button>
          </Link>
        </div>
      </article>
      <section className='nana__data'>
        <article className='text'>
          <div className='score'>
            <h2>Promedio de calificaciones:</h2>
            <div className='star'>
              <Star score={averageScore} name={name} />
            </div>
          </div>
          <div className='text__information'>
            <h2>Nombre:</h2>
            <p className='name--nana'>{name}</p>
            <h2>Jornada:</h2>
            <dir className='text__information--time'>
              <Tags name={time} />
            </dir>
            <h2>Cursos:</h2>
            <ul>
              {studies.map((study, index) => (
                <li key={index}>
                  <Tags name={study} />
                </li>
              ))}
            </ul>
            <h2>Especialidad:</h2>
            <span>
              <Tags name={specialty} />
            </span>
            <h2>Descripción:</h2>
            <p className='text__information--p'>{description}</p>
            <h2>Ciudad</h2>
            <span>
              <Tags name={country} />
            </span>
            <h2>Estado</h2>
            <span>
              <Tags name={state} />
            </span>
            <h2>Capital</h2>
            <span>
              <Tags name={capital} />
            </span>
          </div>
        </article>
        <section className='nana__experience'>
          <article className='years'>
            <ul className='info'>
              <h2>Experiencia</h2>
              {experiences.map((experience, index) => (
                <span key={index}>
                  <div className='info__country'>
                    <li>{experience.year}</li>
                    <li>{experience.country}</li>
                  </div>
                  <li className='experienceI'>{experience.info}</li>
                </span>
              ))}
            </ul>
          </article>
        </section>
        <section className='skill'>
          <h2>Habilidades y Aptitudes</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                <Tags name={skill} />
              </li>
            ))}
          </ul>
        </section>
        <section className='review'>
          <h2>Reseñas</h2>
          <article className='review__article'>
            <img
              className='article--img'
              src={require('../../assets/images/Nanas/maria-sandobal.png')}
              alt={name}
            />
            <div className='score__review'>
              <div className='score__name'>
                <h2>{name}</h2>
                <div>
                  <Star score={averageScore} name={name} />
                </div>
              </div>
              <p className='review--description'>{description}</p>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
};

export default NanaData;
