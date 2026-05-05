import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

/** Plain-text generation (e.g. exam feedback after submit). */
export const textModel = genAI.getGenerativeModel({ 
  model: "gemini-2.5-flash" 
});
