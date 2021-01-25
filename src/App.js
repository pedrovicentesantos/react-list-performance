import React, { useCallback } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import useAsync from './utils/useAsync';
import { reorderItems } from './utils/utils';
import Item from './components/Item';
import Feed from './components/Feed';

const App = () => {
  const [tvShows, setTvShows] = useAsync([]);

  const handleOnDragEnd = useCallback((result) => {
    if (!result.destination) return;
    if (result.source.index === result.destination.index) return;

    const newItems = reorderItems(tvShows, result.source.index, result.destination.index);
    setTvShows(newItems);
  }, [tvShows]);

  const renderClone = useCallback((provided, snapshot, rubric) => (
    <Item
      provided={provided}
      item={tvShows[rubric.source.index]}
      isDragging={snapshot.isDragging}
    />
  ), [tvShows]);

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="flex flex-col items-center bg-gray-100">
        <Droppable
          mode="virtual"
          droppableId="tvShows"
          renderClone={renderClone}
        >
          {(provided) => (
            <Feed items={tvShows} provided={provided} />
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default App;
