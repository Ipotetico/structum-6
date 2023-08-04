import React from 'react';
import Button from '../Button';

import './mazzucchelli.scss';

const Mazzucchelli = ({ setPage }) => {
  return (
    <>
      <div className='main_container gradient kahan'>
        <div className='container'>
          <h2>
         <span className="span"> Siarczan CHONDROITYNY pochodzenia ptasiego <br /> i wołowego – równie skuteczne</span> w łagodzeniu bólu <br /> u pacjentów z ChZ stawu kolanowego.
          </h2>
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
        
                <img className='wykres_kahan' src={process.env.PUBLIC_URL + '/images/wykres_Mazzucchelli_1.svg'} alt="" />
       
   
          </div>

     
            <img src={process.env.PUBLIC_URL + `/images/wykres_Mazzucchelli_2.svg`} alt="" className="wykres_kahan dwa" />
        </div>
        <div className='container menu'>
          <p className='nota'>
          Fardellone P., Zaim M., Saurel A.S., Maheu E. Badanie porównujące skuteczność i bezpieczeństwo stosowania dwóch preparatów siarczanu chondroityny różnego pochodzenia (ptasiego i wołowego) w objawowej chorobie zwyrodnieniowej stawu kolanowego, The Open Rheumatology Journal, 2013, 7, 1-12
          </p>
          <Button title='menu ' setPage={setPage} page={1} />
        </div>
      </div>
    </>
  );
};

export default Mazzucchelli;
