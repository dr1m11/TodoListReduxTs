import React from 'react';
import TodoItem from "./TodoItem/TodoItem.tsx";
import {Todo} from "../store/todoSlice.ts";

interface NotesInterface {
    notes: Todo[]
}

const TodoList: React.FC<NotesInterface> = ({notes}) => {
    return (
        <div>
            {notes.map(note => {
                return (
                    <TodoItem
                        key={note.id}
                        id={note.id}
                        index={notes.indexOf(note) + 1}
                        title={note.title}
                        creationTime={note.creationTime}
                        completed={note.completed}
                        endTime={note.endTime}
                    />
                )
            })}
        </div>
    );
};

export default TodoList;