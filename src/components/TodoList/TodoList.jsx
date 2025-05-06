import TodoListItem from "../TodoListItem/TodoListItem";

function TodoList({ listOfTodos, onDeleteTodo, onCheckBox, onEditTodo }) {
    function deleteTodo(id) {
        console.log("id of todo is : ", id);
        onDeleteTodo(id);
    }
    function onCheckBoxTodo(id) {
        onCheckBox(id);
    }

    return (
        <>
            {/* <h1>Todo list</h1> */}
            <div>
                <ul>
                    {listOfTodos.map(function callback(itemOfTodos) {
                        return (
                            <TodoListItem
                                key={itemOfTodos.id}
                                singleTodoObject={itemOfTodos}
                                onDeletingSingleTodo={deleteTodo}
                                onCheckBoxSingleTodo={onCheckBoxTodo}
                                onEditSingleTodo={onEditTodo}
                            />
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default TodoList;
