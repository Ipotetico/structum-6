import React from 'react';
import Button from '../Button';
import './mcalindon.scss';

const McAlindon = ({ setPage }) => {
  return (
    <>
      <div className='main_container gradient'>
        {/* <div className='container'>
          <h1>Metaanaliza mcalindona</h1>
        </div>
        <div
          style={{
            backgroundColor: 'white',
            width: '80%',
            justifySelf: 'center',
          }}></div> */}
        <div className='container'>
          <h2>
            <span>Glukozamina i siarczan chondroityny</span>
            <br />w leczeniu choroby zwyrodnieniowej stawów<sup>1</sup>
          </h2>
        </div>
        <div className='container grid'>
          <div className='container padding legend'>
            <div className='frame'>
              <div className='wykres one'>
                <p className='vertical'>
                  Średnia wielkość efektu klinicznego <br /> (skala Cohen'a; 95%
                  CI)
                </p>
                <div className='wykres ten'>
                  <p>1,1</p>
                  <hr />
                  <p>0,8</p>
                  <hr />
                  <p>0,5</p>
                  <hr />
                  <p>0,2</p>
                  <hr />
                  <p>0,0</p>
                  <hr />
                  <div className=''></div>
                  <div className='container'>
                    <p> p≤0,01</p>
                    <span className='red'>chondroityna</span>
                    <span className='blue'>glukozamina</span>
                  </div>
                </div>

                <div className='slupki'>
                  <div className='opis zwei'>
                    <strong>0,44</strong>
                    <i className='fas fa-arrow-right'></i>
                    <span className='blue'>mały efekt</span>
                  </div>
                  <div className='opis one'>
                    <strong>0,78</strong>
                    <i className='fas fa-arrow-right'></i>
                    <span className='red'>duzy efekt</span>
                  </div>

                  <div className='slupek blue'>
                    <img
                      src={
                        process.env.PUBLIC_URL + '/images/strzalka_na_dwie.svg'
                      }
                      alt=''
                    />
                  </div>
                  <div className='slupek red'>
                    <img
                      src={
                        process.env.PUBLIC_URL + '/images/strzalka_na_dwie.svg'
                      }
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='container legend'>
              <p>*Skala Cohen'a</p>
              <div className='container space__between'>
                <p>
                  <i className='fas fa-square blekit' />
                  mały efekt 0,2
                </p>
                <p>
                  <i className='fas fa-square grey' />
                  średni efekt 0,5
                </p>
                <p>
                  <i className='fas fa-square red' />
                  duzy efekt 0,8
                </p>
              </div>
            </div>
          </div>
          <div className='container column'>
            <div className='subheadline'>
              <h4>Metaanaliza McAlindona</h4>
              <p>
                (1710 pacjentów z ChZS kolana i biodra, <br /> 15 badań
                klinicznych), <br /> JAMA 2000
              </p>
            </div>

            <div className='subheadline second'>
              <h3>Siarczan chondroityny</h3>
            </div>
            <div className='subheadline red'>
              <p>
                w porównaniu do glukozaminy wykazuje większy efekt kliniczny w
                skali Cohen'a w zakresie redukowania dolegliwości bólowych
              </p>
            </div>
          </div>
        </div>
        <div className='container menu'>
          <p className='nota'>
            <sup>1</sup> JAMA, March 15, 2000-Vol 283, No. 11 1473
          </p>
          <Button title='menu' setPage={setPage} page={1} />
        </div>
      </div>
    </>
  );
};

export default McAlindon;
