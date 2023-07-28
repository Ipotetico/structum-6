import React from 'react';
import Button from '../Button';
import './lekasuplement.scss';

const LekASuplement = ({ setPage }) => {
  return (
    <>
      <video autoPlay muted loop>
        <source
          src={process.env.PUBLIC_URL + '/movies/structum_punkty_2.mp4'}
          type='video/mp4'
        />
      </video>
      <div className='main_container gradient no_background five'>
        <div className='container'>
          <h1>lek czy suplement</h1>
        </div>
        <div
          style={{
            backgroundColor: 'white',
            width: '80%',
            justifySelf: 'center',
          }}></div>
        <div className='container'>
          <h2>
            <span style={{ fontSize: '3.3vw' }}>uwaga!</span>
            <br />
            to nie jest to samo!
          </h2>
        </div>
        <div className='container lek'>
          <h2 className='headline_lek'>
            zasadnicze róznice:{' '}
            <span>
              <i className='fas fa-award'></i>
            </span>
            jakość
            <span>
              <i className='fas fa-circle'></i>
            </span>
            <span>
              <i className='fas fa-shield-alt'></i>
            </span>
            bezpieczeństwo
            <span>
              <i className='fas fa-circle'></i>
            </span>
            <span>
              <i className='fas fa-microscope'></i>
            </span>
            skuteczność potwierdzona badaniami
          </h2>
        </div>
        <div className='container grid'>
          <Button title='lek' setPage={setPage} page={11} />
          <Button title='suplement' setPage={setPage} page={12} />
        </div>
        <div className='container menu'>
          <p className='nota'></p>
          <Button title='menu' setPage={setPage} page={1} />
        </div>
      </div>
    </>
  );
};

export default LekASuplement;
