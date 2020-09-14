import React from 'react';
import math from '../assets/images/home/math.png';
import airplane from '../assets/images/home/airplane.png';
import calendar from '../assets/images/home/calendar.png';
import fashion from '../assets/images/home/fashion.png';
import tedybear from '../assets/images/home/teddy-bear.png';
import tired from '../assets/images/home/tired.png';
import { Link } from 'react-router-dom';
import '../sass/home.scss';

const index = () => {
  return (
    <>
      <section className='sectionMain'>
        <h1>Ya no más preocupaciones al salir de casa</h1>
        <h3>Deja a tus hijos en las mejores manos mientras no estás en casa</h3>
        <Link to='/register'>
          <button>Registra tus datos aquí</button>
        </Link>
      </section>
      <section className='sectionAboutUs'>
        <div className='mission'>
          <div className='mission__images'>
            <img src={math} alt='images math' />
          </div>
          <div className='mission__description'>
            <h3>Misión</h3>
            <p>
              Somos un equipo de mujeres expertas comprometidas con el cuidado
              de los niños, trabajamos con seriedad, y compromiso, brindando
              bienestar a las familias. Creando un ambiente agradable,
              confiable, armónico y de respeto.
            </p>
          </div>
        </div>
        <div className='vision'>
          <div className='vision__images'>
            <img src={fashion} alt='images math' />
          </div>
          <div className='vision__description'>
            <h3>Visión</h3>
            <p>
              Brindar tranquilidad, ofreciendo un servicio profesional y humano
              a las familias que confían en nosotros. Para el año 2020,
              estaremos presentes en los estados más importantes de la
              república.
            </p>
          </div>
        </div>
        <div className='principles'>
          <div className='principles__images'>
            <img src={tedybear} alt='images math' />
          </div>
          <div className='principles__description'>
            <h3>Valores</h3>
            <ul>
              <li>Amor</li>
              <li>Confianza</li>
              <li>Seguridad</li>
              <li>Honestidad</li>
              <li>Respeto</li>
              <li>Confidencialidad</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='sectionInformation'>
        <div className='blockDescription'>
          <h3>Niñeras, una ayuda para llegar a todo</h3>
          <p>
            Cuidar de un niño o un bebé requiere mucha dedicación y esfuerzo.
            Lamentablemente, la conciliación laboral no siempre es posible y
            tienes que acabar pidiendo favores a tus seres queridos y haciendo
            malabares para que tu hijo esté bien atendido.
          </p>
          <br />
          <p>
            Sabemos que buscas lo mejor para ellos, y por eso nos esforzamos día
            a día en ofrecerte el mejor servicio. Nuestro objetivo es ganarnos
            tu confianza para que nuestras niñeras, previamente seleccionadas y
            con amplia experiencia, le den a tus hijos todo el cuidado y
            atención que necesitan.
          </p>
        </div>
        <div className='blockListOptions'>
          <h3>¿Cuando puedes solicitar nuestros servicios?</h3>
          <div className='gridOptions'>
            <div className='listOption'>
              <img src={airplane} alt='' />
              <ul>
                <li>Cierra el colegio o guardería</li>
                <li>Vacaciones de los abuelos</li>
                <li>Viaje de trabajo recurrente</li>
              </ul>
            </div>
            <div className='listOption'>
              <img src={tired} alt='' />
              <ul>
                <li>Mi hija se ha puesto enferma</li>
                <li>Me he alargado en el trabajo</li>
                <li>La niñera habitual no puede</li>
              </ul>
            </div>
            <div className='listOption'>
              <img src={calendar} alt='' />
              <ul>
                <li>Tómate un respiro, tu ratito</li>
                <li>Una tarde con mis amigas</li>
                <li>Cena en pareja</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
