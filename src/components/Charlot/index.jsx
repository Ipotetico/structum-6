import React, { useState, useEffect } from 'react';
import './charlot.scss';
import Button from '../Button';

const Charlot = ({ setPage }) => {
  const [position, setPosition] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setPosition(false);
    }, 500);

    return () => {
      window.clearTimeout(id);
    };
  }, []);

  const handleActive = (number) => {
    if (active === 0) {
      setActive(number);
    }
    if (active !== 0) {
      setActive(0);
    }
  };

  return (
    <>
      <div className='main_container gradient five'>
        {/* <div className='container'>
          <h1>Badanie Charlot</h1>
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
            <br />– ogranicza bolesność i ilość stosowanych NLPZ
          </h2>
        </div>
        <div className='container white'>
          <h2>
            Pacjenci z ChZS kolana i biodra <br />
            Terapia 3-miesięczna STRUCTUM<sup>1</sup>
          </h2>
        </div>
        <div style={{ zIndex: '0' }} className='container grid '>
          <div
            className='do_wykresu'
            style={{
              transform: position ? 'translateX(-100%)' : 'translateX(0%)',
              opacity: active === 2 ? 0 : 1,
            }}>
            <p style={{ opacity: active === 1 ? 0 : 1 }}>
              Ogranicza bolesność <sup>1</sup>
            </p>
            <img
              onClick={() => handleActive(1)}
              className={
                active === 1 ? 'wykres_charlot active1' : 'wykres_charlot'
              }
              src={process.env.PUBLIC_URL + '/images/wykres_Dreisler_01.svg'}
              alt=''
            />
            <div className=''></div>
            <div
              style={{ opacity: active === 1 ? 0 : 1 }}
              className='container'>
              <div className='subheadline second'>siarczan chondroityny</div>
              <div className='subheadline red'>
                <p>
                  zmniejsza dolegliwości bólowe w skali VAS <br /> o&nbsp;
                  <span>50%</span> po 150 dniach
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              transform: position ? 'translateX(100%)' : 'translateX(0%)',
              opacity: active === 1 ? 0 : 1,
            }}
            className='do_wykresu'>
            <p style={{ opacity: active === 2 ? 0 : 1 }}>
              Ogranicza stosowanie NLPZ <sup>1</sup>
            </p>
            <img
              onClick={() => handleActive(2)}
              className={
                active === 2 ? 'wykres_charlot active2' : 'wykres_charlot'
              }
              src={process.env.PUBLIC_URL + '/images/wykres_Dreisler_02.svg'}
              alt=''
            />
            <div className=''></div>
            <div
              style={{ opacity: active === 2 ? 0 : 1 }}
              className='container'>
              <div className='subheadline second'>siarczan chondroityny</div>
              <div className='subheadline red'>
                <p>
                  zmniejsza dzienne dawki NLPZ o <span>50%</span> <br /> po 90
                  dniach terapii
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='container menu'>
          <p className='nota'>
            <sup>1</sup> Charlot J. I współ., Le chondroitine sulfate dans le
            traitment de la gonarthrose et de la coxarthrose. <br /> Resultats a
            5 mois d'une etude muticentrique controlee, en double-aveugle,
            versus placebo. <br /> Rev. Rheum. Mal. Osteoaartic. 1992, 59 (7-8)
          </p>
          <Button title='menu' setPage={setPage} page={1} />
        </div>
      </div>
    </>
  );
};

export default Charlot;
