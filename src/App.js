import React, { Component } from 'react';
import './App.css';
import Container from './Container';
import axios from 'axios';
import apiKey from './config';

class App extends Component {
  constructor(){
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

componentDidMount() {
  axios.get(`https://api.flickr.com/services/rest/?
    method=flickr.photos.search&
    api_key=${apiKey}&
    tags=cats&
    per_page=10&
    format=json&
    nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        loading: false
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
}

  render() {
    console.log(this.state.photos);
    return (
      <Container />
    );
  }
}

export default App;
