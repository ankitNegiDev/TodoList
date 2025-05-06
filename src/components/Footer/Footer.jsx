import React from "react";

function Footer() {
    return (
        <footer className="bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-800 text-white pt-0 text-center fixed bottom-0 w-full">
            <p className="text-md p-0">
                <span className="font-bold">TodoApp</span> - A simple and clean
                To-Do list app.
            </p>
            <a
                href="https://github.com/ankitNegiDev/TodoList"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-400 transition-all"
            >
                Visit my GitHub
            </a>

            <p className="text-xs pt-2">&copy; 2025 All Rights Reserved</p>
        </footer>
    );
}

export default Footer;
