import React from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList } from 'react-window';

import ListRow from './ListRow';

const Feed = React.memo(({ provided, items }) => (
  <FixedSizeList
    height={window.innerHeight}
    itemCount={items.length}
    itemSize={148}
    width={window.innerWidth}
    outerRef={provided.innerRef}
    itemData={items}
    innerElementType="ul"
  >
    {ListRow}
  </FixedSizeList>
));

Feed.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  provided: PropTypes.instanceOf(Object).isRequired,
};

export default Feed;
