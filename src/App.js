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


// TODO

// Loading 
// Add loading page for all pages
// Add loading for first time site load
// Add loading animation
// Add page transition

// Add mobile menu 

// Remove Parallaxe on titles home
// Add menu transition
// Add email form transition
// Add hover button email form animation
// Add send email loading
// Add send email feedback
// Add _blank for contact social media link
// Add contact social media and email links hover animation

// Add 404 page

// Create page for login and signup

// For backend page
// Change 3 theme color
// General => header image, favicon image
// About => Biography, services, services items
// Projects => types, Project {title, thumbnail, type}
// Contact => phone, email adresse street, adresse zip, facebook {active, link}, linkedin {active, link}, instagram {active, link}

// Home client grossir xl


// Home changer font size sub title
// Taille de l'image changer taille,  baisser top
// Réduire padding top de Home Header
// Animation hoover mail same projects type
// Augmenter marge entre header title et qui sommes nous