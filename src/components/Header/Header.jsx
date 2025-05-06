// function Header(){

//     return (
//         <>
//             <h1>Header</h1>
//         </>
//     );
// }
// export default Header;

function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-indigo-400 text-white pt-3 mb-4 shadow-xl rounded-b-xl w-full text-center">
            <h1 className="text-5xl font-extrabold text-shadow-md">Todo App</h1>
            <p className="mt-5 text-2xl font-medium opacity-80">
                Manage your tasks with ease
            </p>
        </header>
    );
}


export default Header;
