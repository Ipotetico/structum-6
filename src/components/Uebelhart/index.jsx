import React, { useState, useEffect } from 'react';
import './ueberhart.scss';
import Button from '../Button';

const Uebelhart = ({ setPage }) => {
  const [position, setPosition] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setPosition(false);
    }, 500);

    return () => {
      window.clearTimeout(id);
    };
  }, []);

  console.log(position);
  return (
    <>
      <div className='main_container gradient five'>
        {/* <div className='container'>
          <h1>Badanie Uebelhart</h1>
        </div>
        <div
          style={{
            backgroundColor: 'white',
            width: '80%',
            justifySelf: 'center',
          }}></div> */}
        <div className='container'>
          <h2>
            <span>Siarczan chondroityny</span>
            <br />– wpływ na szerokość szpary stawu kolanowego
          </h2>
        </div>
        <div className='container white'>
          <h2>TERAPIA: 3 miesiące, 2 razy w roku, dawka 800 mg/dobę</h2>
        </div>
        <div className='uebelhart'>
          {/* PODZIAŁKA */}
          <div
            style={{
              alignItems: 'center',
              padding: '1vw 3vw',
              justifyContent: 'space-between',
            }}
            className='container column'>
            <div
              style={{
                position: 'absolute',
                width: '50%',
                height: '70%',
                boxSizing: 'border-box',
              }}
              className='frame padding'>
              <div className='opis_paska_uebelhart'>
                <h3>-0,29 mm</h3>
                <h3>-0,006 mm</h3>
                <p>szpara stawowa uległa dalszemu zwężeniu</p>
                <p>proces chorobowy wstrzymany</p>
              </div>
              <div className='headline'>
                <div className='container_headline'>
                  <p>
                    <i className='fas fa-square red'></i>siarczan chondroityny
                  </p>
                  <p>
                    <i className='fas fa-square blue'></i>placebo
                  </p>
                  <p>
                    p <i className='fas fa-less-than'></i> 0,039{' '}
                  </p>
                </div>
                <p>Wpływ na szparę stawową</p>
              </div>
              <div className='wykres two'>
                <div className='slupki_uebelhart'>
                  <div className='slupek blue'></div>
                  <div className='slupek red'></div>
                </div>
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <p>-0,30</p>

                <p>-0,25</p>

                <p>-0,20</p>

                <p>-0,15</p>

                <p>-0,10</p>

                <p>-0,05</p>

                <p>0</p>
              </div>
            </div>
            <div className='container column'>
              <div
                style={{
                  position: 'absolute',
                  padding: 0,
                  bottom: '2%',
                  height: '20%',
                  width: '50%',
                }}
                className='container column'>
                {/* <div style={{ padding: '1vw' }} className='subheadline second'>
                  <h3 style={{ fontSize: '1.5vw' }}>Siarczan chondroityny</h3>
                </div> */}
                {/* <div
                  style={{ marginBottom: 0, padding: '2vw 3vw', height: '20%' }}
                  className='subheadline red'>
                  <p style={{ fontSize: '1.2vw' }}>
                    w porównaniu do glukozaminy wykazuje większy efekt kliniczny
                    w skali Cohen'a w zakresie redukowania dolegliwości bólowych
                  </p>
                </div> */}
               <h3 className="pod_tabelka">
               WPŁYW SIARCZANU CHONDROITYNY <br /> NA PŁYN STAWOWY:
               </h3>
               <ul>
                <li>zwiększa lepkość płynu stawowego poprzez  hamowanie <br /> działania hialuronidazy</li>
                <li>pobudza syntezę kwasu hialuronowego</li>
               </ul>
              </div>
            </div>
          </div>

          <div className='padding fota'>
            <img
              src={process.env.PUBLIC_URL + '/images/kolana_dwa.png'}
              alt=''
            />
          </div>
        </div>

        <div className='container menu'>
          <p className='nota'>
            Uebelhart D, Malaise M, Marcolongo R, DeVathairell F et al.
            Intermittent treatment of knee esteoarthritis with oral chondroitin
            sulfate: a one-year, randomised, double-blind, multicienter study
            versus placebo. OsteoArthritis and Cartilage (2004) 12, 269-276
          </p>
          <Button title='menu' setPage={setPage} page={1} />
        </div>
      </div>
    </>
  );
};

export default Uebelhart;
