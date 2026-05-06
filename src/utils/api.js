const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent";

export const enhancePrompt = async (rawPrompt) => {

    if (!API_KEY) {
        console.warn('No API key found. Using mock enhancement.')
        return mockEnhancement(rawPrompt)
    }

    console.log("API KEY:", API_KEY);
    console.log("RAW PROMPT:", rawPrompt);
    console.log("URL:", API_URL);

    console.log("ENV TEST:", import.meta.env);

    try {
        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{

                        text: `You are an expert prompt engineer. Rewrite and improve the user's prompt to make it clearer, more specific, and more effective for AI systems. Do NOT repeat the original prompt. Return ONLY the improved version. User prompt: "${rawPrompt}"`

                    }]
                }]
            })
        })

        if (!response.ok) {
            const errorText = await response.text();
            console.error("API ERROR RESPONSE:", errorText);
            throw new Error(errorText);
        }

        const data = await response.json();
        return data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "No response generated.";
    } catch (error) {
        console.error('Error enhancing prompt:', error);
        return mockEnhancement(rawPrompt);
    }
}

const mockEnhancement = (rawPrompt) => {
    return `You are an expert prompt engineer.

    Rewrite the following prompt to make it clearer, more specific, and more effective for AI systems.

    Do NOT repeat the original prompt.

    Improve it by:
    - clarifying intent
    - adding necessary context
    - making instructions more specific
    - improving structure and readability
    - removing ambiguity

    User prompt:
    "${rawPrompt}"

    Return ONLY the improved prompt.`
}