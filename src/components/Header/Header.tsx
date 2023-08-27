import styles from "./Header.module.css"
import {useAppDispatch} from "../../hooks.ts";
import * as React from "react";
import {changeIsOpen} from "../../store/menuSlice.ts";
const Header: React.FC = () => {

    const dispatch = useAppDispatch()

    function getWeekDay() {
        const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SUT'];
        const date = new Date()

        return days[date.getDay()];
    }

    return (
        <div className={styles.header}>
            <h1>Marat ToDo</h1>
            <h1>{`${getWeekDay()}, ${new Date().getDate()}.${new Date().getMonth() + 1 > 9 ? new Date().getMonth() + 1 : '0' + (new Date().getMonth() + 1)}`}</h1>
            <button className={styles.addNewNote} onClick={() => dispatch(changeIsOpen(true))}>Добавить задачу</button>
        </div>
    );
};

export default Header;