import React from "react";
import styles from './TodoItem.module.css'
import {RxCross1} from "react-icons/rx";
import {BsCheckLg} from "react-icons/bs";
import {checkTodo, deleteTodo} from "../../store/todoSlice.ts";
import {useAppDispatch} from "../../hooks.ts";

interface TodoItemInterface {
    id: string,
    index: number,
    title: string,
    creationTime: string,
    completed: boolean
    endTime: string
}

const TodoItem: React.FC<TodoItemInterface> = ({id, index, title, creationTime, completed, endTime}) => {
    const dispatch = useAppDispatch()
    return (
        <div className={styles.item} style={completed ? {backgroundColor: "rgba(133, 119, 87, 0.24)"} : {}}>
            <div className={styles.itemLeft}>
                <h4>{index}</h4>
                <span>{title}</span>
            </div>
            <div className={styles.itemRight}>
                <span>{creationTime} - {endTime}</span>
                <div className={styles.deleteBtn} onClick={() => dispatch(deleteTodo(id))}><RxCross1 /></div>
                <div className={styles.checkBtn} style={completed ? {backgroundColor: "rgba(87, 79, 59, 0.24)"} : {}} onClick={() => dispatch(checkTodo(id))}><BsCheckLg /></div>
            </div>
        </div>
    );
};

export default TodoItem;