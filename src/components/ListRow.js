import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { areEqual } from 'react-window';

import Item from './Item';

const ListRow = React.memo(({ data, index, style }) => {
  const tvShow = data[index];

  return (
    <Draggable
      draggableId={tvShow.id.toString()}
      index={index}
      key={tvShow.id}
    >
      {(provided) => (
        <Item style={style} provided={provided} item={tvShow} />
      )}
    </Draggable>
  );
}, areEqual);

ListRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.instanceOf(Object).isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
};

export default ListRow;
