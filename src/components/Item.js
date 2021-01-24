import React from 'react';
import PropTypes from 'prop-types';

const areEqual = (prevProps, nextProps) => (
  prevProps.item.id === nextProps.item.id
);

const Item = React.memo(({ provided, item, style }) => (
  <li
    ref={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    style={{ ...style, width: '-webkit-fill-available' }}
    className="flex
      flex-col
      md:flex-row
      items-center
      justify-between
      mx-4
      border-solid
      border-blue-500
      border-2
      rounded
      mx-4
      md:mx-60
      pr-3
      pl-2
      py-2"
    // className="flex
    // flex-col
    // items-center
    // md:flex-row
    // mt-4
    // mx-4
    // md:mx-60
    // justify-between
    // border-solid
    // border-2
    // border-blue-300
    // rounded pr-3
    // pl-2
    // py-2"
  >
    <img className="h-32 w-24 md: ml-12 rounded" src={item.image?.medium || 'https://via.placeholder.com/210x295'} alt={item.name} />
    <p className="font-bold md:mr-40">{item.name}</p>
  </li>
), areEqual);

Item.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  provided: PropTypes.instanceOf(Object).isRequired,
  style: PropTypes.instanceOf(Object),
};

Item.defaultProps = {
  style: {},
};

export default Item;
