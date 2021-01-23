import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import Item from './Item';

const Feed = React.memo(({ provided, items }) => (
  <ul {...provided.droppableProps} ref={provided.innerRef}>
    {items.map((item, index) => (
      <Draggable
        key={item.id}
        draggableId={item.id.toString()}
        index={index}
      >
        {(provided) => (
          <Item provided={provided} item={item} />
        )}
      </Draggable>
    ))}
    {provided.placeholder}
  </ul>
));

Feed.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  provided: PropTypes.instanceOf(Object).isRequired,
};

export default Feed;
