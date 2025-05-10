// This todoListItem focus only on core logic not styling..
/*import { useState } from "react";
import Button from "../Button.jsx/Button";

function TodoListItem({singleTodoObject,onDeletingSingleTodo,onCheckBoxSingleTodo , onEditSingleTodo}){

    // checkbox state..
    const [checkBox,setCheckBox]=useState(false);
    const [isEdit, setIsEdit]=useState(false);
    const [editedTodoValue, setEditedTodoValue] = useState(singleTodoObject.value);

    function deleteSingleTodo(){
        onDeletingSingleTodo(singleTodoObject.id);
    }

    function handelCheckBoxOnChange(event){
        // console.log("handel check box event.target.vlaue is : ",event.target.value);
        // if(event.target.value){
        //     console.log("checkbox  was checked but now uncheked.")
        //     onCheckBoxSingleTodo(singleTodoObject.id);
        //     setCheckBox(false);
        // }else{
        //     console.log("check box was uncheck but now checked.. ")
        //     onCheckBoxSingleTodo(singleTodoObject.id);
        //     setCheckBox(true);
        // }
        const isChecked = event.target.checked;
        setCheckBox(isChecked);
        onCheckBoxSingleTodo(singleTodoObject.id);
    }
    function onEditToggle(){
        setIsEdit(true);
    }
        function handleEditChange(event) {
        setEditedTodoValue(event.target.value);
    }

    function handleEditSave() {
        onEditSingleTodo(singleTodoObject.id, editedTodoValue);
        setIsEdit(false);
    }

    return (
        <li className="flex items-center justify-between p-2 border-b">
            {isEdit ? (
                <div className="flex items-center gap-2 w-full">
                    <input
                        type="text"
                        value={editedTodoValue}
                        onChange={handleEditChange}
                        className="edit-input border px-2 py-1 rounded w-full"
                    />
                    <Button text="Save" handelOnclick={handleEditSave} />
                </div>
            ) : (
                <div className="flex items-center gap-2 w-full">
                    <input
                        type="checkbox"
                        onChange={handelCheckBoxOnChange}
                        checked={checkBox}
                    />
                    <span
                        className={`flex-grow ${
                            checkBox
                                ? "line-through text-gray-400"
                                : "text-black"
                        }`}
                    >
                        {singleTodoObject.value}
                    </span>
                    <Button text="Edit" handelOnclick={onEditToggle} />
                    <Button text="Delete" handelOnclick={deleteSingleTodo} />
                </div>
            )}
        </li>
    );
}
export default TodoListItem;
*/


// TodoListItem component with proper styling..

import { useState } from "react";
import Button from "../Button.jsx/Button";

function TodoListItem({
    singleTodoObject,
    onDeletingSingleTodo,
    onCheckBoxSingleTodo,
    onEditSingleTodo,
}) {
    // checkbox state..
    const [checkBox, setCheckBox] = useState(
        singleTodoObject.completed || false
    );
    const [isEdit, setIsEdit] = useState(false);
    const [editedTodoValue, setEditedTodoValue] = useState(
        singleTodoObject.value
    );

    function deleteSingleTodo() {
        onDeletingSingleTodo(singleTodoObject.id);
    }

    function handelCheckBoxOnChange(event) {
        const isChecked = event.target.checked;
        setCheckBox(isChecked);
        onCheckBoxSingleTodo(singleTodoObject.id);
    }

    function onEditToggle() {
        setIsEdit(true);
    }

    function handleEditChange(event) {
        setEditedTodoValue(event.target.value);
    }

    function handleEditSave() {
        onEditSingleTodo(singleTodoObject.id, editedTodoValue);
        setIsEdit(false);
    }

    return (
        <li className="flex items-center justify-between p-4 rounded-xl shadow-md bg-gradient-to-r from-blue-100 to-blue-50 hover:from-blue-200 hover:to-blue-100 transition-all duration-300 ease-in-out border border-blue-200 mb-4">
            {isEdit ? (
                <div className="flex items-center gap-4 w-full animate-fade-in border border-blue-300 bg-white p-3 rounded-lg shadow-inner transition-all duration-300 ease-in-out">
                    <input
                        type="text"
                        value={editedTodoValue}
                        onChange={handleEditChange}
                        className="border border-blue-300 px-4 py-2 rounded-lg w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-2xl"
                    />
                    <Button text="Save" handelOnclick={handleEditSave} />
                </div>
            ) : (
                <div className="flex items-center gap-4 w-full transition-all duration-300 ease-in-out">
                    <input
                        type="checkbox"
                        onChange={handelCheckBoxOnChange}
                        checked={checkBox}
                        className="h-5 w-5 accent-blue-600 transition-transform duration-300 hover:scale-110"
                    />
                    <span
                        className={`flex-grow text-lg transition-colors duration-300 font-medium ${
                            checkBox
                                ? "line-through text-gray-400"
                                : "text-gray-800"
                        }`}
                    >
                        {singleTodoObject.value}
                    </span>
                    <Button text="Edit" handelOnclick={onEditToggle} />
                    <Button text="Delete" handelOnclick={deleteSingleTodo} />
                </div>
            )}
        </li>
    );
}

export default TodoListItem;
