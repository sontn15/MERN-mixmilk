import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Slider from './components/Slider';
import Certificate from './components/Certificate';
import Footer from './components/Footer';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Slider />
        <Container>
          <ProductScreen />
        </Container>
        <Certificate />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
