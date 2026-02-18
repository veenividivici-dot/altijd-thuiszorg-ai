import OpenAI from "openai";

export default async function handler(req, res) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  if (req.method === "POST") {
    try {
      const { message } = req.body;

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "Je bent de digitale zorgassistent van Altijd Thuis Zorg. Je communiceert professioneel, duidelijk en vriendelijk.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      });

      res.status(200).json({
        reply: completion.choices[0].message.content,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}e.content
    });
  }

}
