import React, { useState } from 'react';
import Button from '../Button';
import obrazki from './obrazki/obrazki';
import './gabay.scss';

const Gabay = ({ setPage }) => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };
  return (
    <>
      <div className='main_container gradient five facts'>
        {/* <div className='container'>
          <h1>Badanie gabay</h1>
        </div>
        <div
          style={{
            backgroundColor: 'white',
            width: '80%',
            justifySelf: 'center',
          }}></div> */}
        <div className='container'>
          <h2>
            <span style={{ fontSize: '3.3vw' }}>
              Siarczan chondroityny u pacjentów z ChZS rąk
            </span>
          </h2>
        </div>
        <div className='container white'>
          <h2>
            Wpływ siarczanu chondroityny na dolegliwość <br /> w chorobie
            zwyrodnieniowej stawów ręki
          </h2>
        </div>
        <div className='container_grid'>
          <div className='facts'>
            <div className='three_rows_container'>
              {obrazki.map((el, index) => (
                <div
                  style={{ opacity: active ? 0 : 1 }}
                  key={index}
                  className='three_rows'>
                  <img
                    src={process.env.PUBLIC_URL + `/images/${el.name}`}
                    alt={el.name}
                  />
                  <h2>{el.text}</h2>
                </div>
              ))}
            </div>
            <div
              onClick={handleActive}
              className={active ? 'container_tabel active' : 'container_tabel'}>
              {/* GREEN */}

              <div className={'container_in_tabel'}>
                {/* PIERWSZY WIERSZ */}
                <div className='container green'>Wybrane parametry</div>
                <div className='container green outline'>
                  <p>Zmniejsza natężenie bólu w skali VAS</p>
                </div>
                <div className='container green outline'>
                  <p>Poprawia sprawność ręki w skali FIHOA</p>
                </div>
                <div className='container green outline'>
                  <p>Skrócenie porannej sztywności</p>
                </div>
              </div>

              {/* RED */}

              <div className={'container_in_tabel'}>
                <div className='container red'>
                  <h3>siarczan chondroityny</h3>
                  <p>(średnio)</p>
                </div>
                <div className='container red outline'>
                  <h3>-20 mm</h3>
                </div>
                <div className='container red outline'>
                  <h3>-2,9 pkt.</h3>
                </div>
                <div className='container red outline'>
                  <h3>-4,8 min.</h3>
                </div>
              </div>

              {/* BLUE */}

              <div className={'container_in_tabel'}>
                <div className='container blue'>
                  <h3>placebo</h3>
                  <p>(średnio)</p>
                </div>
                <div className='container blue outline'>
                  <h3>-11,3 mm</h3>
                </div>
                <div className='container blue outline'>
                  <h3>-0,7 pkt.</h3>
                </div>
                <div className='container blue outline'>
                  <h3>+0,3 min</h3>
                </div>
              </div>
            </div>
          </div>
          <img
            style={{ opacity: active ? 0 : 1, transition: 'all, 0.5s' }}
            src={process.env.PUBLIC_URL + '/images/reka.png'}
            alt='ręka'
          />
        </div>
        <div className='container menu'>
          <p className='nota'>
            Gabay C. i wsp. ARTHRITIS&RHEUMATISM 2011; 63:3383-3391
          </p>
          <Button title='menu' setPage={setPage} page={1} />
        </div>
      </div>
    </>
  );
};

export default Gabay;
