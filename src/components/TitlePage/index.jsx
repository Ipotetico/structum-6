import React from 'react';
import Button from '../Button';
import './titlepage.scss';

const TitlePage = ({ setPage }) => {
  return (
    <>
      <div className='main_container_title'>
        <video muted autoPlay loop>
          <source
            src={process.env.PUBLIC_URL + '/movies/structum_punkty.mp4'}
            type='video/mp4'
          />
        </video>

        <div className='buttons_container'>
          <div className="buttons_subcontainer">
          <Button title='MECHANIZM DZIAŁANIA' setPage={setPage} page={8} />
          <Button title='REKOMENDACJE' setPage={setPage} page={9} />
          <Button title='LEK, A SUPLEMENT' setPage={setPage} page={10} />
          <Button title='KARDIOPROTEKCJA' setPage={setPage} page={13}/>
          <Button title='BADANIE MAZZUCCHELLI'setPage={setPage} page={14}/>
          <img
            src={process.env.PUBLIC_URL + '/images/logo_PF_white.svg'}
            alt=''
            className='logoPF'
          />
          </div>
          <div className="buttons_subcontainer">
          <Button title='badanie kahan' setPage={setPage} page={6} />
          <Button title='badanie wildi' setPage={setPage} page={7} />
          <Button title='badanie gabay' setPage={setPage} page={5} />
          <Button title='badanie charlot' setPage={setPage} page={3} />
          <Button title='badanie uebelhart' setPage={setPage} page={4} />
          <Button title='metaanaliza mcalindona' setPage={setPage} page={2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TitlePage;
