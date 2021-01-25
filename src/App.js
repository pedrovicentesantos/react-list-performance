import React, { useCallback } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Item from './components/Item';
import Feed from './components/Feed';
import useAsync from './utils/useAsync';

function App() {
  const [tvShows, setTvShows] = useAsync([]);

  const handleOnDragEnd = useCallback((result) => {
    if (!result.destination) return;
    if (result.source.index === result.destination.index) return;

    const items = Array.from(tvShows);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTvShows(items);
  }, [tvShows]);

  const clone = useCallback((provided, snapshot, rubric) => (
    <ul
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
    >
      <Item
        provided={provided}
        item={tvShows[rubric.source.index]}
        isDragging={snapshot.isDragging}
      />
    </ul>
  ), [tvShows]);

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="flex flex-col items-center bg-blue-200">
        <Droppable
          mode="virtual"
          droppableId="tvShows"
          renderClone={clone}
        >
          {(provided) => (
            <Feed items={tvShows} provided={provided} />
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
