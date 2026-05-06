import { FaMagic, FaMoon } from "react-icons/fa";

export function Header() {
  return (
    <header className="header flex  justify-center p-4 bg-gray-800">
      <div className="flex items-center space-x-2">
        <FaMagic className="text-white " />
        <h1 className="text-xl font-medium text-white">Prompt Perfector</h1>
      </div>
    </header>
  )
}
