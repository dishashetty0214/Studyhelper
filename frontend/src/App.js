import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!text.trim()) {
      setResult("Please enter some text.");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      console.log("Sending text:", text);

      const response = await fetch("http://localhost:4000/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });

      if (!response.ok) throw new Error("Backend error");

      const data = await response.json();
      console.log("Backend returned:", data);

      setResult(data.response);
    } catch (err) {
      console.error(err);
      setResult("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>AI Study Assistant</h1>

      <textarea
        rows={5}
        cols={50}
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ fontSize: "1rem", padding: "0.5rem" }}
      ></textarea>

      <br />

      <button
        onClick={handleGenerate}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem", fontSize: "1rem", cursor: "pointer" }}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      <pre style={{ marginTop: "1rem", padding: "1rem", background: "#f5f5f5", minHeight: "100px", whiteSpace: "pre-wrap" }}>
        {result}
      </pre>
    </div>
  );
}

export default App;
