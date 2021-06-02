import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomeScreen from './screens/HomeScreen.js'
import ProductScreen from './screens/ProductScreen.js'
import CartScreen from './screens/CartScreen.js'


const App = () => {
  return (
    <Router>
    <Header />
    <main className = 'py-3'>
    <Container>

      <Route path ='/' component={HomeScreen} exact />
      <Route path ='/product/:id' component={ProductScreen}/>
      <Route path ='/cart/:id?' component={CartScreen}/>
      </Container>
    </main>
    <Footer />

    </Router>
  );
}

export default App;
