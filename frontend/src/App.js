import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/' component={HomeScreen} exact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
