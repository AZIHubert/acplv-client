import React from 'react';

import RootPage from './components/RootPage';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <RootPage />
      </div>
    </Router>
  );
}

export default App;


// TODO

// with ref, get height of padding to add this in ComponentWrapper
// Add padding in contact page
// Change order grid in contact page
// Create own textarea styling in contact page