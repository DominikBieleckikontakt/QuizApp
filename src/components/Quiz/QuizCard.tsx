import { randomizeQuestions } from "@/lib/utils";
import { questions } from "@/myconstants/index";
import React, { useState, useEffect } from "react";
import { Question } from "types";
import QuizQuestion from "./QuizQuestion";
import QuizSummary from "./QuizSummary";

const QuizCard = () => {
  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [allQuestions] = useState<Question[]>(
    randomizeQuestions(questions, 10)
  );
  const [wrongAnswers, setWrongAnswers] = useState<
    {
      question: string;
      correct: string;
      wrong: string;
    }[]
  >([]);

  const onChooseOptionHandler = (
    isCorrect: boolean,
    questionIndex: number,
    userAnswer?: number
  ) => {
    setIndex((prevIndex) => prevIndex + 1);

    const correctAnswer =
      allQuestions[questionIndex].answers[
        allQuestions[questionIndex].correctAnswerIndex
      ];

    isCorrect && setPoints((prev) => prev + 1);
    !isCorrect &&
      setWrongAnswers(
        (
          prevAnswers: {
            question: string;
            correct: string;
            wrong: string;
          }[]
        ) => [
          ...prevAnswers,
          {
            question: allQuestions[questionIndex].question,
            correct: correctAnswer,
            wrong: allQuestions[questionIndex].answers[userAnswer!],
          },
        ]
      );
  };

  const onTimeEnd = () => {
    setIndex((prev) => prev + 1);
  };

  return (
    <>
      {index <= 9 && (
        <QuizQuestion
          index={index}
          question={allQuestions[index]}
          onChoose={onChooseOptionHandler}
          onTimeEnd={onTimeEnd}
        />
      )}
      {index === 10 && <QuizSummary points={points} wrong={wrongAnswers} />}
    </>
  );
};

export default QuizCard;
