import React from 'react';
import Button from '../Button';
import './lekasuplement.scss';

const LekASuplement01 = ({ setPage }) => {
  return (
    <>
      <video style={{ opacity: '.7' }} autoPlay muted loop>
        <source
          src={process.env.PUBLIC_URL + '/movies/structum_punkty_2.mp4'}
          type='video/mp4'
        />
      </video>
      <div className='main_container gradient gradient_two no_background'>
        <div className='container grid tabletki'>
          <h1>lek</h1>
          <img src={process.env.PUBLIC_URL + '/images/TABLETKI.png'} alt='' />
        </div>

        <div className=''></div>
        <div
          style={{ alignItems: 'flex-start', padding: '0 5vw' }}
          className='container column'>
          <ul className='punkty'>
            <li>
              substancja lub mieszanina substancji, <br /> o właściwościach
              zapobiegania <span>lub</span> leczenia chorób
            </li>
          </ul>
          <h4 className='h4_punkty'>lub</h4>
          <ul className='punkty'>
            <li>
              <span>podawana w celu</span> postawienia diagnozy
            </li>
          </ul>
          <h4 className='h4_punkty'>lub</h4>
          <ul className='punkty'>
            <li>
              <span>w celu</span> przywrócenia, poprawienia <br /> czy
              modyfikacji <span>fizjologicznych funkcji</span> organizmu
            </li>
          </ul>
        </div>
        <div className='kolka_lek'>
          <div className='kolko one'>leki posiadają badania</div>
          <div className='kolko two'>
            <i className='fas fa-capsules'></i>
            bezpieczeństwa stosowania
          </div>
          <div className='kolko three'>
            <i className='fas fa-prescription-bottle'></i>
            biodostępności
          </div>
          <div className='kolko four'>
            <i className='fas fa-user-md'></i>
            skuteczności klinicznej
          </div>
          <div className='kolko five'>
            <i className='fas fa-skull-crossbones'></i>
            toksykologiczne
          </div>
        </div>
        <div className='powrot'>
          <Button title='powrót' setPage={setPage} page={10} />
        </div>
      </div>
    </>
  );
};

export default LekASuplement01;
