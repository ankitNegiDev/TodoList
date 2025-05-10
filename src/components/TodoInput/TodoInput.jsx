// this is Todoinput component that only focus on core logic not styling..
/*
import {useState} from 'react';
import Button from '../Button.jsx/Button';
function TodoInput({onSubmitHandler}){

    // state variable for input.
    const [inputValue,setInputValue]=useState("");

    function handelOnChange(event){
        console.log("event.target.value is : ",event.target.value);
        setInputValue(event.target.value);
    }
    function handelOnSubmit(event){
        event.preventDefault();
        if(inputValue){
            onSubmitHandler(inputValue);
        }else{
            console.log("sorry input value is empty : ",inputValue);
        }
        setInputValue("");
    }
    function onClick(){
        console.log("todo is added : ");
    }


    return (
        <>
            <h1>Todo input</h1>
            <form onSubmit={handelOnSubmit}>
                <input
                    onChange={handelOnChange}
                    type="text" 
                    value={inputValue}
                />
                <Button type="text" text="Add Todo" handelOnClick={onClick}/>
            </form>
        </>
    );
}
export default TodoInput;
*/


//  todoInput component with stylling..

import { useState } from "react";
import Button from "../Button.jsx/Button";

function TodoInput({ onSubmitHandler }) {
    // state variable for input.
    const [inputValue, setInputValue] = useState("");

    function handelOnChange(event) {
        console.log("event.target.value is : ", event.target.value);
        setInputValue(event.target.value);
    }

    function handelOnSubmit(event) {
        event.preventDefault();
        if (inputValue) {
            onSubmitHandler(inputValue);
        } else {
            console.log("sorry input value is empty : ", inputValue);
        }
        setInputValue("");
    }

    function onClick() {
        console.log("todo is added : ");
    }

    return (
        <div className="flex flex-col items-center justify-center p-4 space-y-4">
            <h1 className="text-3xl font-semibold text-blue-600">
                Add a New Todo
            </h1>
            <form
                onSubmit={handelOnSubmit}
                className="w-full max-w-md flex items-center space-x-4"
            >
                <input
                    type="text"
                    value={inputValue}
                    onChange={handelOnChange}
                    placeholder="Enter your todo..."
                    className="p-3 rounded-lg border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full max-w-xs"
                />
                <Button
                    type="text"
                    text="Add Todo"
                    handelOnClick={onClick}
                    className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                />
            </form>
        </div>
    );
}

export default TodoInput;
