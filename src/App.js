import React from 'react';

import RootPage from './components/RootPage';
import { BrowserRouter as Router } from 'react-router-dom';

import HMenuContextProvider from './context/HMenuContext';
import {AuthProvider} from './context/AuthContext';

function App() {
  return (
    <Router>
      <HMenuContextProvider>
        <AuthProvider>
          <div className="App">
            <RootPage />
          </div>
        </AuthProvider>
      </HMenuContextProvider>
    </Router>
  );
}

export default App;


// TODO:
// Check errors on backend forms
// Redesign contact (specially when almost empty)
// Write usedTypes when a project is edited
// activate/desactivate routes and navbar link when is empty/not empty
// Hover effect for contact email link