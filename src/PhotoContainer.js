import React from 'react'
import Photo from './Photo'
import NotFound from './NotFound'

const PhotoContainer = props =>
<div className="photo-container">
  <h2>Results</h2>
  <ul>
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <NotFound />
  </ul>
</div>;

export default PhotoContainer
