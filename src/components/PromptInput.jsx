import React from 'react';
import { useState } from 'react';
import { FaHandSparkles } from "react-icons/fa";

export function PromptInput() {

    const [length, setLength] = useState(0);

    const handleTextChange = (e) => {
        const text = e.target.value;
        setLength(text.length);
    }

    return (

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
                <h2 className=" font-semibold text-white uppercase tracking-wider">RAW PROMPT</h2>
                <span className="text-xs text-gray-500">{length}/500</span>
            </div>
            <textarea
                className="w-full bg-gray-900/80 border border-blue-500/30 rounded-lg p-4 text-gray-200 text-sm resize-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                placeholder="Write your rough prompt here... Example: 'explain machine learning to a beginner'"
                style={{
                    minHeight: '200px',
                    maxHeight: '300px',
                    height: '250px'
                }}
                onChange={handleTextChange}
            />

            <div className="flex flex-wrap gap-2 mt-2">
                <button
                    className="flex items-center justify-center gap-2 bg-blue-500 w-full hover:bg-blue-400 text-white px-4 py-2 rounded transition-colors duration-300 cursor-pointer"
                >
                    <FaHandSparkles /> Enhance Prompt
                </button>
            </div>

        </div>

    )
}