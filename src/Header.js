import React from 'react';
import SearchForm from './SearchForm';
import Navigation from './Navigation';

const Header = props =>
<div className="header">
  <SearchForm />
  <Navigation />
</div>;

export default Header;
