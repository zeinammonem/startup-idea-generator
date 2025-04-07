import { OpenAI } from "openai";
import { z } from "zod";
import { zodResponseFormat } from "openai/helpers/zod";

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const MODEL = import.meta.env.VITE_MODEL;

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

const zodStartupIdea = z.object({
  startUpIdea: z.string(),
  pitch: z.string(),
});

export type StartupIdea = z.infer<typeof zodStartupIdea>;

const userPrompt = `
You are a startup founder.
You are given an industry and a trend.
You need to create a startup idea that is related to the industry and trend.
You need to create the startup idea to be one word only.
You need to create a pitch for the startup.
The pitch should be 1 line only.
The industry is: {{industry}}
The trend is: {{trend}}

Respond ONLY with valid JSON in the following format. Do not include any explanation or text outside the JSON:

{
  "startUpIdea": "Your startup idea here",
  "pitch": "Your one-line pitch here"
}
`;

export const openAIRequest = async (
  industry: string,
  trend: string
): Promise<StartupIdea> => {
  try {
    const prompt = userPrompt
      .replace("{{industry}}", industry)
      .replace("{{trend}}", trend);

      const response = await openai.chat.completions.create({
      model: MODEL as string,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: zodResponseFormat(zodStartupIdea, "results"),
    });

    const responseContent = response.choices[0].message.content;
    if (!responseContent) {
      throw new Error("No response from OpenAI");
    }

    return JSON.parse(responseContent);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};