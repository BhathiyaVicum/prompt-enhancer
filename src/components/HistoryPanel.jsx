import { FaHistory } from "react-icons/fa";

export function HistoryPanel() {
    return (
        <div className="bg-gray-700/30 rounded-xl p-6 mt-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="flex items-center gap-2 font-semibold text-white">
                    <FaHistory /> Recent Prompts
                </h3>
            </div>
            <div className="text-center py-8 text-gray-400">
                <p className="text-sm mb-6">No prompts yet</p>
            </div>
        </div>
    )
}