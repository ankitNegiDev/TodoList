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