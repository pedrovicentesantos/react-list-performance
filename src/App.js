import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Feed from './components/Feed';

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

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="tvShows">
        {(provided) => (
          <Feed items={tvShows} provided={provided} />
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
