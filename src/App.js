import React, { Component } from 'react';
import './App.css';
import PhotoContainer from './PhotoContainer';
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import axios from 'axios';
import apiKey from './config';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.performSearch = this.performSearch.bind(this);
    this.state = {
      photos: [],
      searchQuery: "",
      loading: true
    };
  }

componentDidMount() {
  this.performSearch();
}

performSearch(query='cats') {
  axios.get(`https://api.flickr.com/services/rest/?
    method=flickr.photos.search&
    api_key=${apiKey}&
    tags=${query}&
    per_page=25&
    format=json&
    nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        searchQuery: query,
        loading: false
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
}

  render() {
    return (
    <BrowserRouter>
      <div className="container">

        <div className="header">
          <SearchForm onSearch={this.performSearch}/>
          <Navigation />
        </div>
        <div className="main-content">
          {
            (this.state.loading)
            ? <p>Loading...</p>
            :
            <Switch>
              <Route path="/search/:query"
                render={ ({match}) => {
                this.performSearch(match.params.query);
                return <PhotoContainer data={this.state} />;
                }
              } />
            <Route exact path="/"
              render={ () => {
                this.performSearch();
                return <PhotoContainer data={this.state} />;
              }
            } />
          </Switch>
          }

        </div>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
