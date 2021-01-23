import React from 'react';
import PropTypes from 'prop-types';

const Item = React.memo(({ provided, item }) => (
  <li
    ref={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    className="flex
    flex-col
    items-center
    md:flex-row
    mt-4
    mx-4
    md:mx-60
    justify-between
    border-solid
    border-2
    border-blue-300
    rounded pr-3
    pl-2
    py-2"
  >
    <img className="h-32 w-24 rounded" src={item.image?.medium || 'https://via.placeholder.com/210x295'} alt={item.name} />
    <p className="font-bold md:mr-40">{item.name}</p>
  </li>
));

Item.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  provided: PropTypes.instanceOf(Object).isRequired,
};

export default Item;
