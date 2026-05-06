import { FaCopy, FaRegTimesCircle } from "react-icons/fa";
import { HiSparkles} from "react-icons/hi2";
import { useState } from "react";

export function PromptOutput({ enhancedPrompt, isLoading }) {

    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        if (!enhancedPrompt) return;

        await navigator.clipboard.writeText(enhancedPrompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    // Show loading state when waiting for enhanced prompt
    if (isLoading) {
        return (
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-semibold text-white uppercase tracking-wider">ENHANCED PROMPT</h2>
                </div>
                <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full border-4 border-blue-500/30 border-t-blue-500 h-10 w-10 mb-4"></div>
                    <p className="text-gray-400">Enhancing your prompt...</p>
                    <p className="text-xs text-gray-500 mt-1">Adding structure and context</p>
                </div>
            </div>
        )
    }

    // when no prompt has been enhanced yet
    if (!enhancedPrompt) {
        return (
            <div className="flex items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                    <p className="text-5xl mb-2">
                        <HiSparkles />
                    </p>
                    <p>Your enhanced prompt will appear here</p>
                    <p className="text-xs mt-1">Write a prompt and click "Enhance Prompt"</p>
                </div>
            </div>
        )
    }

    return (

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
                <h2 className=" font-semibold text-white uppercase tracking-wider">ENHANCED PROMPT</h2>
            </div>
            <textarea
                className="w-full bg-gray-900/80 border border-blue-500/30 rounded-lg p-4 text-gray-200 text-sm resize-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                value={enhancedPrompt}
                readOnly
                style={{
                    minHeight: '200px',
                    maxHeight: '300px',
                    height: '250px'
                }}
            />

            <div className="flex gap-2 mt-2">
                <button
                    onClick={handleCopy}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-700/80 text-gray-300 px-4 py-2 rounded hover:bg-gray-600 transition-all duration-200 cursor-pointer" >
                    <FaCopy /> {copied ? "Copied!" : "Copy"}
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-gray-700/80 text-gray-300 px-4 py-2 rounded hover:bg-gray-600 transition-all duration-200 cursor-pointer">
                    <FaRegTimesCircle /> Clear
                </button>
            </div>


        </div>

    )
}