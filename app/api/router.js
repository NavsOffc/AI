import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { messages } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Kamu adalah AI buatan Nwalhost. Jawab dengan ramah, sopan, dan sedikit gaya modern. Jangan pernah sebut OpenAI.",
      },
      ...messages,
    ],
  });

  const reply = completion.choices[0].message.content;
  return new Response(JSON.stringify({ reply }), { status: 200 });
}
