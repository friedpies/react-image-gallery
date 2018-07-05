import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = props =>{
  const results = props.data;

  let Photos = results.map(photo =>
    <Photo farmId={photo.farm} serverId={photo.server} id={photo.id} secret={photo.secret}/>
  );

  return(
<div className="photo-container">
  <h2>Results</h2>
  <ul>
    {Photos}
    <NotFound />
  </ul>
</div>
);
}
export default PhotoContainer;

///https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
