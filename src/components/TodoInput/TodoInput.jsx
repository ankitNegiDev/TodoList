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
