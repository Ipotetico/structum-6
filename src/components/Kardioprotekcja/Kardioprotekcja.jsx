import React from 'react';
import Button from '../Button';
import './kardioprotekcja.scss';

const Kardioprotekcja = ({ setPage }) => {
  // const [growLeft, setGrowLeft] = useState(false);
  // const [growRight, setGrowRight] = useState(false);

  return (
    <>

      <div className='main_container gradient four'>
      <img src={process.env.PUBLIC_URL + `/images/serce.png`} alt="" className="serce" />
        <div className='container mechanizm'>
          <h1 className='headline' style={{fontSize:'40px'}}>
          Kardioprotekcyjne działanie CS u pacjentów <br /> z chorobami
układu sercowo-naczyniowego.
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
          
        <div className='container white five'>
          <h2>
          Stosowanie CS jest związane z około 40% redukcją ryzyka zawału mięśnia sercowego, co sugeruje kardioprotekcyjne <br /> działanie siarczanu chondroityny.
          </h2>
          
        </div>
        <div className="container_one_row">
        <div className="container_two_rows">
          <div className="text_box">
            <p>Kardioprotekcyjne działanie 
              CS dotyczy zarówno kobiet 
              jak i mężczyzn, bez względu
              na wiek oraz czas terapii 
              (poniżej lub powyżej 1 roku).</p>
          </div>
          <div className="text_box">
            <p>Efekt kardioprotekcyjny 
              obserwuje się u pacjentów 
              leczonych jak i nieleczonych
              lekami z grupy NLPZ.</p>
          </div>
          
        </div>
        <div className="container_two_rows one">
        <div className="text_box one">
            <p>Efekt kardioprotekcyjny 
              obserwuje się u pacjentów 
              leczonych jak i nieleczonych
              lekami z grupy NLPZ.</p>
          </div>
        </div>
        </div>

        <div className='container menu'>
          <div>
            <p className='nota'>
              Mazzucchelli R, Rodrı´guez-Martı´n S, Garcı´a-Vadillo A, Gil M, Rodrı´guez-Miguel A, Barreira-Herna´ndez D, et al. (2021) Risk of acute myocardial infarction among new users of chondroitin sulfate: A nested case-control study. PLoS ONE 16(7): e0253932.
            </p>
          </div>
          <Button title='menu' setPage={setPage} page={1} />
        </div>
      </div>
    </>
  );
};

export default Kardioprotekcja;
