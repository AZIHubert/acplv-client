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
