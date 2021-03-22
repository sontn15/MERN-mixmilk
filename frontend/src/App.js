import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <Container>
          <ProductScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
