import React from 'react';
import './App.css';
import MainPage from './MainPage';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">HEHEBOI</a>
        <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>

        <div class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </div>
      </nav>
      <div class="container">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
