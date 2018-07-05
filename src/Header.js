import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import SearchForm from './SearchForm';
import Navigation from './Navigation';

const Header = props =>
<BrowserRouter>
  <div className="header">
    <Navigation />
    <Route path="/search" component={SearchForm} />
  </div>
</BrowserRouter>;

export default Header;
