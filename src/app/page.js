import React from 'react';
import CensorButton from '../components/CensorButton';
import HitCounter from '../components/HitCounter';

function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>You are visitor number{' '}
        <CensorButton>
          <HitCounter />
        </CensorButton>
      </p>
    </main>
  );
}

export default Home;
