import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';








function App() {
    return (
        <div>
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
