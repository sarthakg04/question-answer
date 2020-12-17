import React, { useState } from "react";
//import { appSounds } from 'react-native-sound/android/src/main/main.js';
import Confetti from "react-confetti";
import clap from "./clap.mp3";
export default function App() {
  const questions = [
    {
      questionText: "What is Python?",
      answerOptions: [
        { answerText: "Programming Language", isCorrect: true },
        { answerText: "Bird", isCorrect: false },
        { answerText: "Computer", isCorrect: false },
        { answerText: "Food Dish", isCorrect: false },
      ],
    },
    {
      questionText: "How do we print in Python?",
      answerOptions: [
        { answerText: 'print("I love Coding")', isCorrect: true },
        { answerText: 'display("I love Coding")', isCorrect: false },
        { answerText: 'cout<<"I love Coding";', isCorrect: false },
        { answerText: 'printf("I love Coding");', isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is a type of loop",
      answerOptions: [
        { answerText: "switch", isCorrect: false },
        { answerText: "print", isCorrect: false },
        { answerText: "while", isCorrect: true },
        { answerText: "input()", isCorrect: false },
      ],
    },
    {
      questionText: "How do we declare a variable in Python",
      answerOptions: [
        { answerText: "int a=5;", isCorrect: false },
        { answerText: "int a=5", isCorrect: false },
        { answerText: "a=5", isCorrect: true },
        { answerText: "a==5", isCorrect: false },
      ],
    },
    {
      questionText: "What is the extension of Python files?",
      answerOptions: [
        { answerText: ".txt", isCorrect: false },
        { answerText: ".py", isCorrect: true },
        { answerText: ".python", isCorrect: false },
        { answerText: ".doc", isCorrect: false },
      ],
    },
    {
      questionText: "Write a code to add 5 to a variable a?",
      answerOptions: [
        { answerText: "a=5", isCorrect: false },
        { answerText: "b=a+5", isCorrect: false },
        { answerText: "a=a+5", isCorrect: true },
        { answerText: "None", isCorrect: false },
      ],
    },
    {
      questionText: "How do we declare an empty list in Python?",
      answerOptions: [
        { answerText: "l=[]", isCorrect: false },
        { answerText: "l=()", isCorrect: false },
        { answerText: 'l=""', isCorrect: true },
        { answerText: "l=5,6,7", isCorrect: false },
      ],
    },
    {
      questionText: "What does l[::-1] implies?",
      answerOptions: [
        { answerText: "String Reversal", isCorrect: false },
        { answerText: "List Reversal", isCorrect: true },
        { answerText: "List Sorting", isCorrect: false },
        { answerText: "None", isCorrect: false },
      ],
    },
    {
      questionText: "How do we comment statements in Python?",
      answerOptions: [
        { answerText: "#CommentHere", isCorrect: true },
        { answerText: "/CommentHere", isCorrect: false },
        { answerText: '"CommentHere!"', isCorrect: false },
        { answerText: "*CommentHere", isCorrect: false },
      ],
    },
    {
      questionText: "How do we write a for loop in Python?",
      answerOptions: [
        { answerText: "for i in range(5):", isCorrect: true },
        { answerText: "for in range(10):", isCorrect: false },
        { answerText: "while(i<5):", isCorrect: false },
        { answerText: "for if:", isCorrect: false },
      ],
    },
  ];
  Promise.resolve(questions.sort(() => 0.5 - Math.random()).slice(0, 5));

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < 5) {
      setCurrentQuestion(nextQuestion);
    } else {
      //appSounds.likeSound.play();
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      <div className="question-container">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {5}
            <audio hidden src={clap} controls autoPlay />
            <Confetti
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              width={1500}
              height={1000}
            />
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{5}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
