import { useState } from "react";
import Header from "./components/Header/Header";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import { v4 as uuidv4 } from "uuid";
import Footer from "./components/Footer/Footer";

function App() {
    const [todos,setTodos]=useState([
        {
            id:1,
            value:"Do homework",
            completed:false
        },
        {
            id:2,
            value:"Go to school",
            completed:false
        }
    ]);
    function onFormSubmit(value){
        if(value){
            let obj={
                id: uuidv4(),
                value:value,
                completed:false
            }
            setTodos([...todos, obj]);
        }
    }
    function onDeleteTodoById(id){
        let filteredTodos=todos.filter(function callback(singleTodoObject){
            if(singleTodoObject.id===id){
                return false;
            }else{
                return true;
            }
        })
        setTodos(filteredTodos);
    }
    function handleCheckbox(id) {
        const updatedTodos = todos.map(function (singleTodoObject) {
            if (singleTodoObject.id === id) {
                return { ...singleTodoObject, completed: !singleTodoObject.completed };
            }
            return singleTodoObject;
        });
        setTodos(updatedTodos);
    }

    function onEditTodo(id, newValue) {
        const updatedTodos = todos.map(function (singleTodoObject) {
            if (singleTodoObject.id === id) {
                return { ...singleTodoObject, value: newValue };
            }
            return singleTodoObject;
        });
        setTodos(updatedTodos);
    }

    return (
        <>
            <div className="min-h-screen h-full bg-gradient-to-br from-blue-600 via-white to-indigo-400 ">
                <Header />
                <TodoInput onSubmitHandler={onFormSubmit} />
                <TodoList
                    listOfTodos={todos}
                    onDeleteTodo={onDeleteTodoById}
                    onCheckBox={handleCheckbox}
                    onEditTodo={onEditTodo}
                />
                <Footer />
            </div>
        </>
    );
}

export default App;
