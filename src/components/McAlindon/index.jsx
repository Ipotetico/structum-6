import React from 'react';
import Button from '../Button';
import './mcalindon.scss';

const McAlindon = ({ setPage }) => {
  return (
    <>
      <div className='main_container_mcalindon'>
          <h2>
            <span>Glukozamina i siarczan chondroityny</span>
            <br />w leczeniu choroby zwyrodnieniowej stawów<sup>1</sup>
          </h2>
    
        <div className='middle'>
          <div className='kontener'>
            <div className="pudelko">
              <div className="red">
                <div className="slupek">
                <img src={process.env.PUBLIC_URL + `/images/78.svg`} alt="" className="number" />
                <img src={process.env.PUBLIC_URL + `/images/strzalka_mc.svg`} alt="" className="arrow" />
                </div>
              </div>
              <div className="blue">
                <div className="slupek">
                <img src={process.env.PUBLIC_URL + `/images/44.svg`} alt="" className="number two" />
                <img src={process.env.PUBLIC_URL + `/images/strzalka_mc.svg`} alt="" className="arrow" />
                </div>
              </div>
              <img src={process.env.PUBLIC_URL + `/images/wykres_mcalindon_01.svg`} alt="" />
            </div>
            <div className="pudelko">
              <img src={process.env.PUBLIC_URL + `/images/wykres_mcalindon_02.svg`} alt="" />
            </div>
          </div>
          {/* <div className='container column'>
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
          </div> */}



            <div className="pudelko">
              <img src={process.env.PUBLIC_URL + `/images/wykres_mcalindon_03.svg`} alt="" />
            </div>

        </div>
    <div className="dol">
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
