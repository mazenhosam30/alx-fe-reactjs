import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// src/App.jsx
import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
    return (
        <div>
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        </div>
    );
}

export default App;
