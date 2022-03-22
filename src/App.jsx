import React from 'react';
import './App.css';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

const App = () =>
  <div className="container">
    <Search />
    <List />
  </div>;

export default App;
