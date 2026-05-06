const API_KEY = import.meta.env.VITE_GROQ_API_KEY
const API_URL = "https://api.groq.com/openai/v1/chat/completions";

export const enhancePrompt = async (rawPrompt) => {

    if (!API_KEY) {
        console.warn('No API key found. Using mock enhancement.')
        return mockEnhancement(rawPrompt)
    }

    console.log("API KEY:", API_KEY);
    console.log("RAW PROMPT:", rawPrompt);
    console.log("URL:", API_URL);

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "system",
                        content: "You are an expert prompt engineer. Rewrite and improve user prompts to make them clearer, more specific, and more effective for AI systems."
                    },
                    {
                        role: "user",
                        content: `Rewrite and improve this prompt. Do NOT repeat the original prompt. Return ONLY the improved version, no explanations. User prompt: "${rawPrompt}"`
                    }
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        })

        if (!response.ok) {
            const errorText = await response.text();
            console.error("API ERROR RESPONSE:", errorText);
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        return data?.choices?.[0]?.message?.content?.trim() || "No response generated.";
    } catch (error) {
        console.error('Error enhancing prompt:', error);
        return mockEnhancement(rawPrompt);
    }
}

const mockEnhancement = (rawPrompt) => {
    return `Enhanced: "${rawPrompt}"`
}