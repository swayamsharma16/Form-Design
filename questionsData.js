// questionsData.js

const questions = {
  Technology: [
    {
      question: "What is your favorite programming language?",
      options: ["JavaScript", "Python", "Java", "C#"],
    },
    {
      question: "How many years of experience do you have in programming?",
      type: "number",
    },
  ],
  Health: [
    {
      question: "How often do you exercise?",
      options: ["Daily", "Weekly", "Monthly", "Rarely"],
    },
    {
      question: "What is your diet preference?",
      options: ["Vegetarian", "Vegan", "Non-Vegetarian"],
    },
  ],
  Education: [
    {
      question: "What is your highest qualification?",
      options: ["High School", "Bachelor's", "Master's", "PhD"],
    },
    {
      question: "What is your field of study?",
      type: "text",
    },
  ],
};

module.exports = questions;
