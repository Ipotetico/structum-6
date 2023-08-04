import React, { useState } from 'react';
import Button from '../Button';
import './mechanizm.scss';

const Mechanizm = ({ setPage }) => {
  const [growLeft, setGrowLeft] = useState(false);
  const [growRight, setGrowRight] = useState(false);

  return (
    <>
      <div className='main_container gradient four'>
        <div className='container mechanizm'>
          <h1>
            Mechanizm działania <span>siarczanu chondroityny</span>
          </h1>
        </div>
        <div
          style={{
            backgroundColor: 'white',
            height: '1px',
            width: '80%',
            justifySelf: 'center',
            alignSelf: 'center',
          }}></div>
        <div className='container white'>
          <h2>
            siarczan chondroityny <br /> - dwukierunkowy mechanizm działania
            <sup>1,2</sup>
          </h2>
        </div>
        <div className='container two_rows'>
          <h3>
            wpływ <span>siarczanu chondroityny</span> na chrząstkę stawową:
          </h3>
          <div className='container_mech_for_two'>
            <div
              onClick={() => setGrowLeft(!growLeft)}
              className={growLeft ? 'container_frame grow' : 'container_frame'}>
              <p className='green_head'>Odbudowa tkanki chrzęstnej</p>
              <ul className='blue'>
                <li>
                  Stymuluje chondroicyty - do produkcji składników substancji
                  międzykomórkowych
                </li>
                <li>Stymuluje osteocyty</li>
                <li>Bierze udział w biosyntezie proteoglikanów</li>
              </ul>
            </div>
            <div
              onClick={() => setGrowRight(!growRight)}
              className={
                growRight ? 'container_frame grow' : 'container_frame'
              }>
              <p className='blekit_head'>Hamuje procesy degeneracji</p>

              <ul className='blue'>
                <li>Hamuje enzymy proteolityczne</li>
                <li>
                  Redukuje syntezę mediatorów procesu zapalnego (prostaglandyn i
                  leukotrienów)
                </li>
              </ul>
            </div>
          </div>
          <h3 >
            wpływ <span>siarczanu chondroityny</span> na płyn stawowy:
          </h3>
          <div className='container_mech two'>
            <div className='container'>
            <ul className='blue' style={{marginTop:'0vw'}}>
                <li>zwiększa lepkość płynu stawowego poprzez hamowanie działania hialuronidazy</li>
                <li style={{marginBottom:0}}>
                pobudza syntezę kwasu hialuronowego
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='container menu'>
          <div>
            <p className='nota'>
              <sup>1</sup> Charakterystyka Produktu Leczniczego Structum 06/2021
            </p>
            <p className='nota'>
              <sup>2</sup> W. Marczyński et al.; Analiza biologiczna możliwości
              "ochrony" chrząstki stawowej; <br /> Ortopedia Traumatologia
              Rehabilitacja Medsport press, 2013; 5(6); Vol. 15, 509-515
            </p>
          </div>
          <Button title='menu' setPage={setPage} page={1} />
        </div>
      </div>
    </>
  );
};

export default Mechanizm;
