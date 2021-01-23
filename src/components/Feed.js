import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const Feed = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <Item index={index} key={item.character.id} item={item.character} />
    ))}
  </ul>
);

Feed.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default Feed;
