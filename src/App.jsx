import { Header } from "./components/Header";
import { PromptInput } from "./components/PromptInput";
import { PromptOutput } from "./components/PromptOutput";
import { HistoryPanel } from "./components/HistoryPanel";

function App() {
    return (
        <div className="app bg-gray-900 min-h-screen text-gray-300">
            <div>
                <Header />
            </div>
            <main className="main-container p-4 md:px-40 sm:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-1 md:mt-3">
                    <PromptInput />
                    <PromptOutput />
                </div>
                <HistoryPanel />
            </main>
            
        </div>
    )
}

export default App;
