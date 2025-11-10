import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();




const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function test() {
  try {
    // ✅ Use the correct model name
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const result = await model.generateContent("Hello Gemini!");
    console.log("✅ Response:", result.response.text());
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

test();
