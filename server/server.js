import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/shorten", async (req, res) => {
  try {
    console.log("incoming body =", req.body);

    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    const response = await fetch(`https://cleanuri.com/api/v1/shorten?url=${encodeURIComponent(url)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: ``,
    });

    console.log("cleanuri status =", response.status);

    const rawText = await response.text();
    console.log("cleanuri raw response =", rawText);

    if (!response.ok) {
      return res.status(response.status).json({
        error: "CleanURI request failed",
        details: rawText,
      });
    }

    const data = JSON.parse(rawText);
    return res.json(data);
  } catch (error) {
    console.error("backend shorten error =", error);
    return res.status(500).json({
      error: "Failed to shorten URL",
      details: String(error),
    });
  }
});

app.listen(5001, () => {
  console.log("🚀 Server running on http://127.0.0.1:5001");
});