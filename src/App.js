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
// ANd for the Header

// Media Queries
// Add Gill
// Font Mail 100 vw
// Home Services add service
// Qui sommes nous
// Change header image size
// Filter selector disable stroke

// Set nav and footer a fixed height and use it to defined top and bottom padding



