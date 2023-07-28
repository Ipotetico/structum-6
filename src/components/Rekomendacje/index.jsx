import React from 'react';
import Button from '../Button';
import './rekomendacje.scss';

const Rekomendacje = ({ setPage }) => {
  return (
    <>
      <div className='main_container gradient_reco reco'>
        <h2>
          Rekomendacje dla leków SYSADOA <span>w leczeniu ChZS </span>
        </h2>

        <div className='reco'>
          <div className='tabel_reco_container'>
            <div className='tabel_reco'>
              {/* FIRST ROW */}
              <p className=''></p>
              <p className='field_reco blue bold'>
                Knee OA <br /> - ESCEO 2019
              </p>
              <p className='field_reco blue bold'>
                Knee OA <br /> - EULAR 2003
              </p>
              <p className='field_reco blue bold'>
                Hand OA <br /> - EULAR 2018
              </p>
              <p className='field_reco blue bold'>
                Hip OA <br /> - EULAR 2005
              </p>

              {/* THIRD ROW */}
              <p className='field_reco blekit_half bold'>
                Siarczan glukozaminy
              </p>
              <p className='field_reco blekit_half green'>First Step</p>
              <p className='field_reco blekit_half green'>Grade A</p>
              <p className='field_reco blekit_half red'>Not recommended</p>
              <p className='field_reco blekit_half black'>Inconclusive</p>

              {/* SECOND ROW */}
              <p className='field_reco blekit bold'>Siarczan chondroityny</p>
              <p className='field_reco blekit green'>First Step</p>
              <p className='field_reco blekit green'>Grade A</p>
              <p className='field_reco blekit green'>Grade A</p>
              <p className='field_reco blekit green'>Grade A</p>
              {/* FOURTH ROW */}
              <p className='field_reco blekit_half bold'>
                Niezmydlające się oleje z soi i awokado
              </p>
              <p className='field_reco blekit_half red'>Not recommended</p>
              <p className='field_reco blekit_half black'>Grade B</p>
              <p className='field_reco blekit_half red'>Not recommended</p>
              <p className='field_reco blekit_half red'>Not recommended</p>

              {/* FIFTH ROW */}
              <p className='field_reco blekit_half bold'>Iniekcje dostawowe</p>
              <p className='field_reco blekit_half black'>Second Step</p>
              <p className='field_reco blekit_half black'>Grade B</p>
              <p className='field_reco blekit_half red'>Not recommended</p>
              <p className='field_reco blekit_half black'>Grade C</p>
            </div>
          </div>
        </div>
        <div className='container single'>
          <p className='nota'></p>
          <Button title='menu' setPage={setPage} page={1} />
        </div>
      </div>
    </>
  );
};

export default Rekomendacje;
