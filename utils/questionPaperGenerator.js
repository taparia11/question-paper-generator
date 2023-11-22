// utils/questionPaperGenerator.js
const Question = require("../models/question");

async function generateQuestionPaper(totalMarks, distribution) {
  let questionPaper = [];

  for (const difficulty in distribution) {
    const marksForDifficulty = distribution[difficulty] * totalMarks;
    const questions = await Question.find({ difficulty }).limit(
      marksForDifficulty
    );
    questionPaper = questionPaper.concat(questions);
  }

  return questionPaper;
}

module.exports = generateQuestionPaper;
