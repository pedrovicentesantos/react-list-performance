import React from 'react';
import PropTypes from 'prop-types';
import { areEqual } from 'react-window';

import { getStyle } from '../utils/utils';

const Item = React.memo(({
  provided,
  item,
  style,
  isDragging,
}) => (
  <div
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    ref={provided.innerRef}
    style={getStyle({ provided, style, isDragging })}
    className="flex
      items-center
      md:justify-between
      bg-gray-900
      border-solid
      border-green-800
      border-4
      rounded"
  >
    <img className="p-1 h-32 w-24 rounded md:ml-4" src={item.image?.medium || 'https://via.placeholder.com/210x295'} alt={item.name} />
    <p className="font-bold text-gray-200 text-3xl md:mr-4">{item.name}</p>
  </div>
), areEqual);

Item.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  provided: PropTypes.instanceOf(Object).isRequired,
  style: PropTypes.instanceOf(Object),
  isDragging: PropTypes.bool,
};

Item.defaultProps = {
  style: {},
  isDragging: false,
};

export default Item;
