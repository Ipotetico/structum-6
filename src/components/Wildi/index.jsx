import React, { useState } from 'react';
import Button from '../Button';
import './wildi.scss';

const Wildi = ({ setPage }) => {
  const [action, setAction] = useState(true);
  return (
    <>
      <div className='main_container gradient five wildi'>
        {/* <div className='container'>
          <h1>Badanie Wildi</h1>
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
            <br />– redukcja utraty objętości chrząstki <br /> i uszkodzeń
            szpiku kostnego
          </h2>
        </div>
        <div className='container wildi'>
          <p className={action ? 'subhead' : 'subhead action'}>
            Badanie pilotażowe, podwójnie zaślepione, kontrolowane placebo, pod
            kontrolą MRI. <br />{' '}
            <span className='red'>Siarczan chondroityny, </span>
            800 mg/dobę vs. placebo. <br /> Badanie trwało{' '}
            <span className='blue'>
              6 miesięcy, przedłużone o kolejne 6 miesięcy metodą otwartej
              próby.
            </span>
          </p>

          <p className={!action ? 'subhead' : 'subhead action'}>
            U pacjentów otrzymujących jednocześnie{' '}
            <span className='red'>CS + NLPZ </span>
            po 6 miesiącach zaobserwowano <br />
            <span className='blue'>
              istotnie mniejszą grubość błony maziowej
            </span>{' '}
            niż w grupie Placebo + NLPZ i mniejszy odsetek pacjentów z obrzękiem
            stawu.
          </p>
        </div>
        <div className='container grid sixty'>
          <div
            style={{
              position: 'relative',
              boxSizing: 'border-box',
              padding: '2vw',
            }}
            className='container padding'>
            {/* ODSLONA 1 */}

            <div className={action ? 'frame wildi' : 'frame wildi action'}>
              <div className='container'>
                <p className='vertical'>
                  wartość utraty objętości chrząstki (%)
                </p>
              </div>
              <div className='container wildi coordinates'>
                {/* SLUPKI */}
                {action && (
                  <div className='slupki'>
                    <div className='container one_wildi'>
                      <div className='red'>
                        <p className='value rosso'>-2,87%</p>
                      </div>
                      <div className='blue'>
                        <p className='value blu'>-4,67%</p>
                      </div>
                    </div>
                    <div className='container two_wildi'>
                      <div className='red'>
                        <p className='value rosso'>-3,71%</p>
                      </div>
                      <div className='blue'>
                        <p className='value blu'>-6,12%</p>
                      </div>
                    </div>
                  </div>
                )}
                <p>Zmiana objętości chrząstki vs. wartości wyjściowe</p>
                <div
                  style={{
                    position: 'absolute',
                    top: '7%',
                    height: 'auto',
                  }}
                  className='container grid'>
                  <p className='opis_wildi'>6 miesięcy</p>
                  <p className='opis_wildi'>12 miesięcy</p>
                </div>
                <div className='container_coordinates eight'>
                  <p className='number'>0</p>
                  <span className='line'></span>
                  <p className='number'>-1</p>
                  <span className='line'></span>
                  <p className='number'>-2</p>
                  <span className='line'></span>
                  <p className='number'>-3</p>
                  <span className='line'></span>
                  <p className='number'>-4</p>
                  <span className='line'></span>
                  <p className='number'>-5</p>
                  <span className='line'></span>
                  <p className='number'>-6</p>
                  <span className='line'></span>
                  <p className='number'>-7</p>
                  <span className='line'></span>
                </div>
              </div>
            </div>
            {/* ODSLONA 2 */}

            <div className={!action ? 'frame wildi' : 'frame wildi action'}>
              <div className='container'>
                <p className='vertical'>wynik BML</p>
              </div>
              <div className='container wildi coordinates'>
                {/* SLUPKI */}
                {!action && (
                  <div className='slupki page_two'>
                    <div className='container one_wildi'>
                      <div className='red'>
                        <p className='value rosso'>-3,71</p>
                      </div>
                      <div className='blue'>
                        <p className='value blu'>0,43</p>
                      </div>
                    </div>
                  </div>
                )}
                <p>Redukcja uszkodzeń szpiku kostnego vs. Wartości wyjściowe</p>

                <div className='container_coordinates seven'>
                  <p className='number'>0,6</p>
                  <span className='line'></span>
                  <p className='number'>0,4</p>
                  <span className='line'></span>
                  <p className='number'>0,2</p>
                  <span className='line'></span>
                  <p className='number'>0</p>
                  <span className='line bold'></span>
                  <p className='number'>-0,2</p>
                  <span className='line'></span>
                  <p className='number'>-0,4</p>
                  <span className='line'></span>
                  <p className='number'>-0,6</p>
                  <span className='line'></span>
                </div>
                <p style={{ fontSize: '1vw' }}>
                  BML (Bone Marrow Leissions - uszkodzenia szpiku kostnego) -
                  wskaźnik progresji zmian w chrząstce
                </p>
              </div>
            </div>
          </div>
          <div className='container grid landscape'>
            {/* ODSLONA 1 */}
            <div
              className={action ? 'container grid' : 'container grid action'}>
              <div className='container column'>
                <p>
                  <i className='fas fa-square red'></i>siarczan chondroityny
                </p>

                <p>
                  <i className='fas fa-square blue'></i>placebo
                </p>
              </div>
              <img
                style={{ width: '80%' }}
                src={process.env.PUBLIC_URL + '/images/obrazek_4.svg'}
                alt=''
              />
            </div>
            {/* ODSLONA 2 */}
            <div
              className={!action ? 'container grid' : 'container grid action'}>
              <div className='container column'>
                <p>
                  <i className='fas fa-square red'></i>siarczan chondroityny
                </p>

                <p>
                  <i className='fas fa-square blue'></i>placebo
                </p>
              </div>

              <img
                style={{ width: '80%' }}
                src={process.env.PUBLIC_URL + '/images/obrazek_4.svg'}
                alt=''
              />
            </div>

            {/*  */}
            {/* ODSLONA 1 */}
            <div className={action ? 'container red' : 'container red action'}>
              U pacjentów w grupie CS, w porównaniu z pacjentami w grupie
              placebo, wystapiła istotna redukcja utraty objętości chrząstki w
              całym stawie kolanowym po 6 miesiącach, która utrzymywała się
              także po 12 miesiącach terapii.
            </div>
            {/* ODSLONA 2 */}
            <div className={!action ? 'container red' : 'container red action'}>
              Po 12 miesiącach terapii, siarczan chondroityny istotnie redukuje
              BML (uszkodzenia szpiku kostnego).
            </div>
          </div>
        </div>
        <div className='container menu three'>
          <p className='nota'>
            Wildi LM, Raynauld J-P, Martel-Pelletier J, et al. Ann Rheum Dis
            (2011). <br /> doi: 10.1136/ard.2010.140848;
          </p>
          <Button title='menu ' setPage={setPage} page={1} />
          <div
            className={action ? 'indicator' : 'indicator turned'}
            onClick={() => setAction(!action)}>
            <i className='fas fa-arrow-right'></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wildi;
