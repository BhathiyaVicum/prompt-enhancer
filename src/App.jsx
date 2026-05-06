import { useState } from 'react'
import { PromptInput } from "./components/PromptInput"
import { PromptOutput } from "./components/PromptOutput"
import { HistoryPanel } from "./components/HistoryPanel"
import { Header } from "./components/Header"

function App() {
    
    const [rawPrompt, setRawPrompt] = useState('')
    const [enhancedPrompt, setEnhancedPrompt] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [history, setHistory] = useState([])

    // Load a past prompt back into the input
    const handleLoadPrompt = (promptText) => {
        setRawPrompt(promptText)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="app bg-gray-900 min-h-screen text-gray-300">
            <Header />
            
            <main className="main-container p-4 md:px-40 sm:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-1 md:mt-3">
                    <PromptInput 
                        rawPrompt={rawPrompt}
                        setRawPrompt={setRawPrompt}
                        setEnhancedPrompt={setEnhancedPrompt}
                        setHistory={setHistory}
                        setIsLoading={setIsLoading}
                    />
                    <PromptOutput 
                        enhancedPrompt={enhancedPrompt}
                        isLoading={isLoading}
                        setEnhancedPrompt={setEnhancedPrompt}
                        setRawPrompt={setRawPrompt}
                    />
                </div>
                
                <HistoryPanel 
                    history={history}
                    setHistory={setHistory}
                    onLoadPrompt={handleLoadPrompt}
                />
            </main>
        </div>
    )
}

export default App