import React from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList, areEqual } from 'react-window';

import ListRow from './ListRow';

const Feed = React.memo(({ provided, items }) => (
  <FixedSizeList
    height={window.innerHeight}
    itemCount={items.length}
    itemSize={148}
    width="100%"
    outerRef={provided.innerRef}
    itemData={items}
  >
    {ListRow}
  </FixedSizeList>
), areEqual);

Feed.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  provided: PropTypes.instanceOf(Object).isRequired,
};

export default Feed;
