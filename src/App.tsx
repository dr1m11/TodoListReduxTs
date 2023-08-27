import Header from "./components/Header/Header.tsx";
import {useAppSelector} from "./hooks.ts";
import TodoList from "./components/TodoList.tsx";
import AddNewTaskScreen from "./components/AddNewTaskScreen/AddNewTaskScreen.tsx";

function App() {

    const notes= useAppSelector(state => state.root.todoReducer.list)
    const isOpen = useAppSelector(state => state.root.menuReducer.isOpen)

    return (

        <div>
            {isOpen ? <AddNewTaskScreen /> : null}
            <div className={"wrapper"}>
                <Header />
                <TodoList notes={notes}/>
            </div>
        </div>
    )
}

export default App
