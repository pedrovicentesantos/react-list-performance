import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FixedSizeList } from 'react-window';
import PropTypes from 'prop-types';
import Item from './components/Item';
// import Feed from './components/Feed';

function App() {
  const [tvShows, setTvShows] = useState([]);
  const pages = Array.from(Array(10).keys());

  const fetchData = async () => {
    const API_URL = 'http://api.tvmaze.com/shows';
    const promises = [];

    pages.map((page) => promises.push(axios.get(`${API_URL}?page=${page}`)
      .then((res) => res.data)));

    const responses = await Promise.all(promises);
    const data = [].concat(...responses);
    setTvShows(data);
  };
  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleOnDragEnd = useCallback((result) => {
    if (!result.destination) return;
    if (result.source.index === result.destination.index) {
      return;
    }
    const items = tvShows;
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTvShows(items);
  }, [tvShows]);

  const Row = React.memo(({ data, index, style }) => {
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
  });

  Row.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.instanceOf(Object).isRequired,
    data: PropTypes.instanceOf(Array).isRequired,
  };

  const clone = (provided, snapshot, rubric) => (
    <ul
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
    >
      <Item provided={provided} item={tvShows[rubric.source.index]} />
    </ul>
  );

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable
        mode="virtual"
        droppableId="tvShows"
        renderClone={clone}
      >
        {(provided) => (
          <FixedSizeList
            height={window.innerHeight}
            itemCount={tvShows.length}
            itemSize={148}
            width={window.innerWidth}
            outerRef={provided.innerRef}
            itemData={tvShows}
            innerElementType="ul"
          >
            {Row}
          </FixedSizeList>
          // <Feed items={tvShows} provided={provided} />
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
