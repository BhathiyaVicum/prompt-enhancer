import { useState, useEffect } from 'react'
import { PromptInput } from "./components/PromptInput"
import { PromptOutput } from "./components/PromptOutput"
import { HistoryPanel } from "./components/HistoryPanel"
import { Header } from "./components/Header"
import { Footer } from './components/Footer'

function App() {
    
    const [history, setHistory] = useState(() => {

        // Try to get saved data
        const saved = localStorage.getItem('promptHistory')
        
        if (saved) {
            // If data exists, convert it back to array
            const parsed = JSON.parse(saved)
            return parsed
        } else {
            return []
        }

    })

    const [rawPrompt, setRawPrompt] = useState('')
    const [enhancedPrompt, setEnhancedPrompt] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        localStorage.setItem('promptHistory', JSON.stringify(history))
    }, [history])

    const handleLoadPrompt = (item) => {
        setRawPrompt(item.raw)
        setEnhancedPrompt(item.enhanced)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="app bg-gray-900 min-h-screen text-gray-300 flex flex-col">
            <Header />
            
            <main className="main-container p-4 md:px-40 sm:px-20 flex-1">
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
                        setHistory={setHistory}
                    />
                </div>
                
                <HistoryPanel 
                    history={history}
                    setHistory={setHistory}
                    onLoadPrompt={handleLoadPrompt}
                />
            </main>
            
            <Footer />
        </div>
    )
}

export default App