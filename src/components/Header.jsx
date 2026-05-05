import { FaMagic, FaMoon } from "react-icons/fa";

export function Header() {
  return (
    <header className="header flex items-center justify-between p-4 bg-gray-800 md:px-40 sm:px-20">
      <div className="flex items-center space-x-2">
        <FaMagic className="text-white" />
        <h1 className="text-xl font-medium text-white">Prompt Perfector</h1>
      </div>
      <div className="cursor-pointer bg-gray-700 p-2 rounded hover:bg-gray-600 transition-colors duration-300">
          <FaMoon className="text-white" />
      </div>
    </header>
  )
}
