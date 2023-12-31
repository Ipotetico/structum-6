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
       <span className="" style={{fontSize:'40px'}}>Kardioprotekcyjne działanie CS </span>u pacjentów <br /> z chorobami układu sercowo-naczyniowego.
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
          
        <div className='container white_kardio five'>
          <h2>
       <span style={{fontSize:'30px', fontWeight:600}}>Stosowanie CS jest związane z około 40% redukcją ryzyka zawału mięśnia sercowego,</span> co sugeruje kardioprotekcyjne <br /> działanie siarczanu chondroityny.
          </h2>
          
        </div>
        <div className="container_one_row">

          <div className="text_box">
            <p><span> Kardioprotekcyjne działanie 
              CS</span> dotyczy zarówno kobiet 
              jak <br /> i mężczyzn, bez względu
              na wiek oraz czas terapii 
              (poniżej lub powyżej <br /> 1 roku).</p>
          </div>
          <div className="text_box">
            <p>  <span>Efekt kardioprotekcyjny </span>
              obserwuje się <br /> u pacjentów 
              leczonych jak i nieleczonych
              lekami z grupy NLPZ.</p>
          </div>
        <div className="text_box">
            <p>Stosowanie glukozaminy ani nie zmniejsza ani nie zwiększa ryzyka  zawału serca.</p>
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
