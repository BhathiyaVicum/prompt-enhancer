import { FaCopy, FaRedo, FaSave } from "react-icons/fa";

export function PromptOutput() {
    return (

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
                <h2 className=" font-semibold text-white uppercase tracking-wider">ENHANCED PROMPT</h2>
            </div>
            <textarea
                className="w-full bg-gray-900/80 border border-blue-500/30 rounded-lg p-4 text-gray-200 text-sm resize-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                placeholder=""
                style={{
                    minHeight: '200px',
                    maxHeight: '300px',
                    height: '250px'
                }}
            />

            <div className="flex gap-2 mt-2">
                <button
                    className= "flex-1 flex items-center justify-center gap-2 bg-gray-700/80 text-gray-300 px-4 py-2 rounded hover:bg-gray-600 transition-all duration-200 cursor-pointer" >
                    <FaCopy /> Copy
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-gray-700/80 text-gray-300 px-4 py-2 rounded hover:bg-gray-600 transition-all duration-200 cursor-pointer">
                    <FaRedo /> Regenerate
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-gray-700/80 text-gray-300 px-4 py-2 rounded hover:bg-gray-600 transition-all duration-200 cursor-pointer">
                    <FaSave /> Save
                </button>
            </div>

            
        </div>

    )
}