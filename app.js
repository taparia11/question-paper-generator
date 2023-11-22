// app.js
const express = require("express");
const mongoose = require("mongoose");
const questionRoutes = require("./routes/questions");
const questionPaperRoutes = require("./routes/questionPaper");

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://mayank:mayank@cluster0.dxu2r.mongodb.net/reelo",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Use routes
app.use("/api", questionRoutes);
app.use("/api", questionPaperRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
