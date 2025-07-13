import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";

const initialData = {
  "todo": {
    title: "To Do",
    items: [
      { id: "1", content: "Create dashboard layout" },
      { id: "2", content: "Set up routing" },
    ],
  },
  "in-progress": {
    title: "In Progress",
    items: [
      { id: "3", content: "Build Kanban board" },
    ],
  },
  "done": {
    title: "Done",
    items: [
      { id: "4", content: "Install Tailwind CSS" },
    ],
  },
};

const Kanban = () => {
  const [columns, setColumns] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];
    const sourceItems = [...sourceCol.items];
    const destItems = [...destCol.items];
    const [movedItem] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, movedItem);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceCol,
          items: sourceItems,
        },
      });
    } else {
      destItems.splice(destination.index, 0, movedItem);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceCol,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destCol,
          items: destItems,
        },
      });
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-6">🗂 Kanban Board</h2>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Object.entries(columns).map(([colId, colData]) => (
            <Droppable key={colId} droppableId={colId}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-gray-100 p-4 rounded min-h-[300px]"
                >
                  <h3 className="font-semibold text-lg mb-3">{colData.title}</h3>
                  {colData.items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="bg-white p-3 mb-2 rounded shadow text-sm"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Kanban;
