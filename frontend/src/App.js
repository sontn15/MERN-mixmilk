import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <Container>
          <h1>Mixmilk</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
