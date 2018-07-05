import React from 'react';
import PropTypes from 'prop-types';

const Photo = props => {
const URL = concatURL(props);

return(
<li>
  <img src={URL} alt="" />
</li>
);
}

Photo.PropTypes = {
  farmId: PropTypes.number.isRequired,
  serverId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  secret: PropTypes.string.isRequired
}

const concatURL = (data) => {
  const URL = `https://farm${data.farmId}.staticflickr.com/${data.serverId}/${data.id}_${data.secret}.jpg`;
  return URL;
}
export default Photo;
