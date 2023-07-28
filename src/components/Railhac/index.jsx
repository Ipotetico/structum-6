import React from 'react';
import Button from '../Button';
import './railhac.scss';

const Railhac = ({ setPage }) => {
  return (
    <>
      <div className='main_container gradient reilhac'>
        <div className='container'>
          <h1>badanie reilhac</h1>
        </div>

        <span className='line'></span>
        <div className='container'>
          <h2>
            <span>siarczan chondroityny</span>
            <br />
            zmiana objętości tkanki chrzęstnej<sup>1</sup>
          </h2>
        </div>
        <div className='container white'>
          <h2>
            Wpływ 12-miesięcznego leczenia STRUCTUM 500 mg 2 x na dobę u
            pacjentów z chorobą zwyrodnieniową stawu kolanowego
          </h2>
        </div>
        <span className='reilhac_subtitle'>
          Badanie randomizowane,
          <span className='blue'>prowadzone </span>
          <span className='red'> metodą podwójnej ślepej próby,</span>
          <span className='blue'>
            kontrolowane placebo z zastosowaniem <sup>1</sup>
          </span>
        </span>
        <div className='container grid'>
          <div className='frame'>
            <p>Zmiana całkowitej objętości chrząstki</p>
            <div className='legenda'>
              <p>
                <i class='fas fa-square red'></i>siarczan chondroityny
              </p>
              <p>
                <i class='fas fa-square blue'></i>placebo
              </p>
            </div>
            <div className='opisy'>
              <span className='blue'>
                -46 mm<sup>3</sup> + SD;NS
              </span>
              <span className='red'>
                +180 mm <sup>3</sup> + SD
              </span>
            </div>
            <div className='wykres reilhac'>
              <div className='hr_container'>
                <hr />
              </div>
              <div className='hr_container'>
                <hr />
              </div>
              <div className='hr_container'>
                <hr />
              </div>
              <div className='hr_container'>
                <hr />
              </div>
              <div className='hr_container'>
                <hr />
              </div>
              <div className='hr_container'>
                <hr />
              </div>
              <div className='hr_container'>
                <hr />
              </div>
              <div className='hr_container'>
                <hr />
              </div>
              <div className='hr_container'>
                <hr />
              </div>
              <div className='hr_container'>
                <hr />
              </div>
              <div className='hr_container'>
                <hr />
              </div>
              <div className='hr_container'>
                <hr />
              </div>
              <div className='hr_container'>
                <hr />
              </div>
              <div className='hr_container'>
                <hr />
              </div>
              <p>-100</p>
              <p>-50</p>
              <p>0</p>
              <p>50</p>
              <p>100</p>
              <p>150</p>
              <p>200</p>

              {/* SLUPKI */}
              <div className='slupki red'></div>
              <div className='slupki blue'></div>
            </div>
            <p>Objętkość całościowa</p>
          </div>

          <div className='space_between'>
            <div className='subheadline grid'>
              <div className='container'>
                <img
                  src={process.env.PUBLIC_URL + '/images/obrazek_4.svg'}
                  alt=''
                />
              </div>
              <p>
                Ciągła terapia{' '}
                <span className='red bold'>siarczanem chondroityny</span> nawet
                do 12 miesięcy <span className='red'>2x500 mg</span> powoduje
                nieznaczne{' '}
                <span className='blue bold'>
                  zwiększenie całkowitej objętości chrząstki stawowej.
                </span>
              </p>
            </div>

            <div className='subheadline grid'>
              <div className='container'>
                <img
                  src={process.env.PUBLIC_URL + '/images/obrazek_5.svg'}
                  alt=''
                />
              </div>
              <p>
                Ciągła terapia nawet do 12 miesięcy dawką{' '}
                <span className='red'>2x500 mg</span> jest kluczowa{' '}
                <span className='blue bold'>
                  w skutecznej redukcji objawów ChZS występujących u pacjenta,
                  t.j.:
                </span>
                <ul>
                  <li>bóle stawów,</li>
                  <li>ograniczenie ruchomości,</li>
                  <li>zmiany zapalne (obrzęki),</li>
                  <li>trzeszczenia</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className='container menu'>
          <p className='nota'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            magnam
          </p>
          <Button title='menu' setPage={setPage} page={1} />
        </div>
      </div>
    </>
  );
};

export default Railhac;
