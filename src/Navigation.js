import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = props =>
<nav className="main-nav">
  <ul>
    <li><Link to="/search">Search</Link></li>
    <li><a href='#'>Cats</a></li>
    <li><a href='#'>Dogs</a></li>
    <li><a href='#'>Computers</a></li>
  </ul>
</nav>;

export default Navigation;
