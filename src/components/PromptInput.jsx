import React from 'react';
import { useState } from 'react';
import { HiSparkles } from "react-icons/hi2";
import { enhancePrompt } from "../utils/api";

export function PromptInput({ rawPrompt, setRawPrompt, setEnhancedPrompt, setHistory, setIsLoading }) {

    const [length, setLength] = useState(0);
    const [error, setError] = useState("");

    const handleTextChange = (e) => {
        const text = e.target.value;
        setRawPrompt(text);
        setLength(text.length);
    }

    const handleEnhanceClick = async () => {

        if (!rawPrompt.trim()) {
            setError("Please enter a prompt to enhance.");
            return;
        }
        setError("");

        setIsLoading(true);

        console.log("Button clicked");

        try {
            // call gemini Api
            const result = await enhancePrompt(rawPrompt);
            setEnhancedPrompt(result);

            const newHistoryItem = {
                id: Date.now(),
                raw: rawPrompt,
                enhanced: result,
                timestamp: new Date().toISOString()
            }

            setHistory(prev => [newHistoryItem, ...prev].slice(0, 10)); // keep only last 10 items

        } catch (error) {
            alert("Error enhancing prompt. Please try again.");
        } finally {
            setIsLoading(false);
        }

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
                value={rawPrompt}
                onChange={handleTextChange}
            />

            {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
            )}

            <div className="flex flex-wrap gap-2 mt-2">
                <button
                    onClick={handleEnhanceClick}
                    className="flex items-center justify-center gap-2 bg-blue-500 w-full hover:bg-blue-400 text-white px-4 py-2 rounded transition-colors duration-300 cursor-pointer"
                    
                >
                    <HiSparkles /> Enhance Prompt
                </button>
            </div>

        </div>

    )
}