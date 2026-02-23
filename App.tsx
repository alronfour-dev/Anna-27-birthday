import React, { useState } from 'react';
import BirthdayPage from './components/BirthdayPage';
import AquariumBuilder from './components/AquariumBuilder';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'birthday' | 'builder'>('birthday');

  return (
    <>
      {currentPage === 'birthday' && (
        <BirthdayPage onStart={() => setCurrentPage('builder')} />
      )}
      {currentPage === 'builder' && (
        <AquariumBuilder onBack={() => setCurrentPage('birthday')} />
      )}
    </>
  );
};

export default App;
