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
// Create context with reducer for every model, to deal with change
// Create better parent component to deal with errors and redirection (when token is expired)
// Add waitModal for every changes
// Create better file for export queries and mutations