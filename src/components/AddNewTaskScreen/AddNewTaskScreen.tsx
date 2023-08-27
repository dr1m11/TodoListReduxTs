import styles from './AddNewTaskScreen.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {addEndTime, addTitle, changeIsOpen} from "../../store/menuSlice.ts";
import {addTodo} from "../../store/todoSlice.ts";
import {RxCross1} from "react-icons/rx";


const AddNewTaskScreen = () => {
    const dispatch = useAppDispatch()
    const {title, endTime} = useAppSelector(state => state.root.menuReducer)

    const backToInitial = () => {
        dispatch(addTitle(''))
        dispatch(addEndTime(''))
        dispatch(changeIsOpen(false))
    }

    return (
        <div className={styles.addNewTaskScreen}>
            <div className={styles.wrapperMenu}>
                <div className={styles.deleteBtn} onClick={() => backToInitial()}><RxCross1 /></div>
                <div className={styles.firstRow}>
                    <h3>Введите текст задачи:</h3>
                    <input className={styles.textInput} type={"text"} onChange={event => dispatch(addTitle(event.target.value))}/>
                </div>
                <div className={styles.secondRow}>
                    <h3>Введите текст задачи:</h3>
                    <input className={styles.textInput} style={{width: "8.5%", minWidth: "80px"}} type={"time"} onChange={event => dispatch(addEndTime(event.target.value))}/>
                </div>
                <button className={styles.ready} disabled={!(title && endTime)} onClick={() => {
                    dispatch(addTodo({title, endTime}))
                    backToInitial()
                }}>Готово</button>
            </div>
        </div>
    );
};

export default AddNewTaskScreen;