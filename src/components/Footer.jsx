import { FaGithub } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="footer flex  justify-center p-4 bg-gray-800">
            <div className="flex items-center flex-wrap space-x-2">
                <a href="https://github.com/BhathiyaVicum/prompt-enhancer" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-white hover:text-blue-500 transition-colors duration-300" />
                </a>
                <span className="text-sm text-gray-500">
                    Made by <a href="https://github.com/BhathiyaVicum" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">BhathiyaVicum</a>
                </span>
            </div>
        </footer>
    )
}
