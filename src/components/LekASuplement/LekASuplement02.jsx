import React from 'react';
import Button from '../Button';
import './lekasuplement.scss';

const LekASuplement02 = ({ setPage }) => {
  return (
    <>
      <video style={{ opacity: '.7' }} autoPlay muted loop>
        <source
          src={process.env.PUBLIC_URL + '/movies/structum_punkty_2.mp4'}
          type='video/mp4'
        />
      </video>
      <div className='main_container gradient gradient_two no_background'>
        <div className='container tabletki two'>
          <h1>suplement</h1>
        </div>

        <div className=''></div>
        <div
          style={{ alignItems: 'flex-start', padding: '0 5vw' }}
          className='container column'>
          <ul className='punkty'>
            <li>
              środek spozywczy, którego celem jest uzupełnienie normalnej diety,{' '}
              <span>skoncentrowane źródło witamin</span>
            </li>
          </ul>
          <h4 className='h4_punkty'>lub</h4>
          <ul className='punkty'>
            <li>
              <span>składników mineralnych</span>
            </li>
          </ul>
          <h4 className='h4_punkty'>lub</h4>
          <ul className='punkty'>
            <li>
              <span>
                innych substancji wykazujących efekt odzywczy lub inny
                fizjologiczny
              </span>
            </li>
          </ul>
        </div>
        <div className='kolka_lek'>
          <div className='kolko three'>
            suplementy diety nie leczą <br /> i nie zapobiegają chorobie
          </div>
        </div>
        <div className='powrot'>
          <Button title='powrót' setPage={setPage} page={10} />
        </div>
      </div>
    </>
  );
};

export default LekASuplement02;
