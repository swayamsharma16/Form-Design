const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

// Sample questions data
const questions = require("./questionsData");

app.use(cors());
app.use(express.json());

// Endpoint to fetch technology questions
app.get("/api/technology", (req, res) => {
  if (questions.Technology) {
    res.json(questions.Technology);
  } else {
    res.status(404).json({ error: "Technology questions not found" });
  }
});

// Endpoint to fetch health questions
app.get("/api/health", (req, res) => {
  if (questions.Health) {
    res.json(questions.Health);
  } else {
    res.status(404).json({ error: "Health questions not found" });
  }
});

// Endpoint to fetch education questions
app.get("/api/education", (req, res) => {
  if (questions.Education) {
    res.json(questions.Education);
  } else {
    res.status(404).json({ error: "Education questions not found" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
