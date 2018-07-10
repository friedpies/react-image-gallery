import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = (props) =>{
  const results = props.data.photos;
  const query = props.data.searchQuery;
  let Photos;

  if (results.length > 0) {
    Photos = results.map(photo =>
      <Photo farmId={photo.farm} serverId={photo.server} id={photo.id} key={photo.id} secret={photo.secret}/>
    );
  } else {
    Photos =   <NotFound />
  }

  return(
<div className="photo-container">
  <h2>Results</h2>
  <h3>{query}</h3>
  <ul>
    {Photos}
  </ul>
</div>
);
}
export default PhotoContainer;
