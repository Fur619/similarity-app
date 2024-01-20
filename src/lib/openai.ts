export const openaiCreateEmbedding = async ({ input }: { input: string }) => {
    const apiUrl = 'https://api.openai.com/v1/embeddings';

    const requestBody = {
        input,
        model: 'text-embedding-ada-002',
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

