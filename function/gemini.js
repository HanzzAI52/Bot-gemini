const fetch = require('node-fetch');

async function callGeminiAPI(prompt) {
  const res = await fetch('https://api.gemini.example.com/v1/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.GEMINI_API_KEY,
      'X-API-SECRET': process.env.GEMINI_API_SECRET,
    },
    body: JSON.stringify({ prompt }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data.choices?.[0]?.message || 'Tidak ada respons.';
}

module.exports = { callGeminiAPI };
