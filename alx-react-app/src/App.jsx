import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// App.jsx
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;

