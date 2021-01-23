import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Item from './components/Item';

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

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = tvShows;
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTvShows(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="tvShows">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {tvShows.map((tvShow, index) => (
              <Draggable
                key={tvShow.id}
                draggableId={tvShow.id.toString()}
                index={index}
              >
                {(provided) => (
                  <Item innerRef={provided.innerRef} provided={provided} item={tvShow} />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
