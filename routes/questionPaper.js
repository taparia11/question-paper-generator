const express = require("express");
const router = express.Router();
const generateQuestionPaper = require("../utils/questionPaperGenerator");

// API endpoint to generate a question paper with specified difficulty distribution
router.get("/generate-question-paper", async (req, res) => {
  const totalMarks = 100; // Example total marks

  // Parse difficulty distribution from query parameters
  const { easy, medium, hard } = req.query;
  const distribution = {
    Easy: (easy || 20) / 100,
    Medium: (medium || 50) / 100,
    Hard: (hard || 30) / 100,
  };

  try {
    const questionPaper = await generateQuestionPaper(totalMarks, distribution);
    res.json(questionPaper);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
