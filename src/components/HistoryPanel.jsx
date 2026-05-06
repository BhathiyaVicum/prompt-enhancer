import { FaHistory, FaTrashAlt } from "react-icons/fa";

export function HistoryPanel({ history, setHistory, onLoadPrompt }) {

    const clearHistory = () => {
        if (window.confirm("Are you sure you want to clear your prompt history? This action cannot be undone.")) {
            alert("History cleared!");
        }
    }

    const deleteHistoryItem = (id) => {
        setHistory(prev => prev.filter(item => item.id !== id));
    }

    if (history && history.length > 0) {
        return (
            <div className="bg-gray-800/30 rounded-xl p-6 mt-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-400">
                        <FaHistory /> Recent Prompts
                        <span className="text-xs bg-gray-700 px-2 py-0.5 rounded-full">
                            {history.length}
                        </span>
                    </h3>
                </div>

                <div className="space-y-3 max-h-80 overflow-y-auto">
                    {history.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-start gap-3 bg-gray-900/40 p-3 rounded-lg hover:bg-gray-900/60 transition-all duration-200 group"
                        >
                            <div
                                className="flex-1 cursor-pointer"
                                onClick={() => onLoadPrompt(item.raw)}
                            >
                                <p className="text-sm text-gray-300 mb-1 line-clamp-2">
                                    {item.raw}
                                </p>
                                <div className="flex gap-3 text-xs text-gray-600">
                                    <span>{new Date(item.timestamp).toLocaleString()}</span>
                                    <span className="text-blue-500">Load →</span>
                                </div>
                            </div>

                            <button
                                className="text-gray-500 hover:text-red-500 transition-colors duration-200 p-1"
                                onClick={() => deleteHistoryItem(item.id)}
                                title="Delete this prompt"
                            >
                                <FaTrashAlt size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }


}