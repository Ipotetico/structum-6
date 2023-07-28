import React, { useState } from 'react';
import './App.scss';
import Charlot from './components/Charlot';
import Gabay from './components/Gabay';
import Kahan from './components/Kahan';
import LekASuplement from './components/LekASuplement';
import LekASuplement01 from './components/LekASuplement/LekASuplement01';
import LekASuplement02 from './components/LekASuplement/LekASuplement02';
import McAlindon from './components/McAlindon';
import Mechanizm from './components/Mechanizm';
import Rekomendacje from './components/Rekomendacje';
import TitlePage from './components/TitlePage';
import Uebelhart from './components/Uebelhart';
import Wildi from './components/Wildi';
import Kardioprotekcja from './components/Kardioprotekcja/Kardioprotekcja';
import Mazzucchelli from './components/Mazzucchelli/Mazzucchelli';

const App = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      {page === 1 && <TitlePage setPage={setPage} />}
      {page === 2 && <McAlindon setPage={setPage} />}
      {page === 3 && <Charlot setPage={setPage} />}
      {page === 4 && <Uebelhart setPage={setPage} />}
      {page === 5 && <Gabay setPage={setPage} />}
      {page === 6 && <Kahan setPage={setPage} />}
      {page === 7 && <Wildi setPage={setPage} />}
      {page === 8 && <Mechanizm setPage={setPage} />}
      {page === 9 && <Rekomendacje setPage={setPage} />}
      {page === 10 && <LekASuplement setPage={setPage} />}
      {page === 11 && <LekASuplement01 setPage={setPage} />}
      {page === 12 && <LekASuplement02 setPage={setPage} />}
      {page === 13 && <Kardioprotekcja setPage={setPage} />}
      {page === 14 && <Mazzucchelli setPage={setPage} />}
    </>
  );
};

export default App;
