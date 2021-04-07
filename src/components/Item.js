import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { areEqual } from 'react-window';
import { ExternalLink, Star } from 'react-feather';

import { getStyle } from '../utils/utils';

const Item = React.memo(({
  provided,
  item,
  style,
  isDragging,
}) => {
  const [isFav, setIsFav] = useState(false);

  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      style={getStyle({ provided, style, isDragging })}
      className="
        border-solid
        border-blue-400
        border-4
        rounded"
    >
      <div className="flex items-center md:justify-between">
        <img className="p-1 h-32 w-24 rounded mr-2 md:ml-4" src={item.image?.medium || 'https://via.placeholder.com/210x295'} alt={item.name} />
        <p className="font-bold text-gray-800 text-xl md:text-3xl md:mr-8">{item.name}</p>
      </div>
      <a className="absolute top-2 right-1" href={item.url} target="_blank" rel="noreferrer">
        <ExternalLink />
      </a>
      <button onClick={() => setIsFav(!isFav)} className="absolute top-2 right-9" type="button">
        {isFav
          ? (
            <Star fill="yellow" strokeWidth={2} />
          ) : (
            <Star strokeWidth={2} />
          )}
      </button>
    </div>
  );
}, areEqual);

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
