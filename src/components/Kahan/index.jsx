import React from 'react';
import Button from '../Button';
// import Chart from 'react-apexcharts'
// import chart from './chart';

import './kahan.scss';

const Kahan = ({ setPage }) => {
  return (
    <>
      <div className='main_container gradient kahan'>
        <div className='container'>
          <h2>
            Wpływ długotrwałej terapii siarczanem chondroityny na progresję
            choroby zwyrodnieniowej <br /> stawu kolanowego
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
        
                <img className='wykres_kahan' src={process.env.PUBLIC_URL + '/images/wykres_Kahan.svg'} alt="" />
       
   
          </div>

     
            <img src={process.env.PUBLIC_URL + `/images/wykres_Kahan_2.svg`} alt="" className="wykres_kahan dwa" />
      
     
          
        </div>
        <div className='container menu'>
          <p className='nota'>
            Kahan A. i wsp. ARTHRITIS & RHEUMATISM, Vol. 60, nr 2, Feb 2009; pp
            524-533.
          </p>
          <Button title='menu ' setPage={setPage} page={1} />
        </div>
      </div>
    </>
  );
};

export default Kahan;
