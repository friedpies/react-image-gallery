import React from 'react';
import SearchForm from './SearchForm'
import MainNav from './MainNav'
import PhotoContainer from './PhotoContainer'


const Container = props => <
div className="container">
  <SearchForm />
  <MainNav />
  <PhotoContainer />
</div>;

export default Container
