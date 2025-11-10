import express from "express";
import { model } from "../utils/geminiClient.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || typeof text !== "string") {
      return res.status(400).json({ error: "Missing or invalid 'text'" });
    }

    // ✅ FIX: Pass plain text or array of strings, NOT { messages: [...] }
    const result = await model.generateContent([text]);

    // ✅ Extract safely
    const generatedText =
      result?.response?.text?.() ||
      result?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No output generated";

    res.json({ response: generatedText });
  } catch (err) {
    console.error("Gemini SDK Error:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
