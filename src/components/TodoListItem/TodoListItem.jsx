import { useState } from "react";
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
