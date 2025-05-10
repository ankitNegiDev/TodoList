// basic button component that focus only on logic..
/*
function Button({text,type,handelOnclick}){

    return(
        <>
            <button
                type={type}
                onClick={handelOnclick}
            >
                {text}
            </button>
        </>
    );
}
export default Button;
*/

// Button component with proper style..
function Button({ text, type, handelOnclick }) {
    return (
        <button
            type={type}
            onClick={handelOnclick}
            className="px-5 py-2 bg-gradient-to-br from-blue-600 to-indigo-400 text-white font-medium rounded-md shadow-md 
                    hover:bg-gradient-to-br hover:from-blue-700 hover:to-indigo-500 hover:scale-105 active:scale-95
                    transition-all duration-200 ease-in-out focus:outline-none 
                    focus:ring-2 focus:ring-blue-400"
        >
            {text}
        </button>
    );
}

export default Button;
