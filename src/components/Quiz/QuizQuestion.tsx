import { useEffect, useState } from "react";

import { Question } from "types";
import { Button } from "../UI/button";
import { Progress } from "../UI/progress";

const QuizQuestion = ({
  index,
  question,
  onChoose,
  onTimeEnd,
}: {
  index: number;
  question: Question;
  onChoose: (
    isCorrect: boolean,
    questionIndex: number,
    userAnswer?: number
  ) => void;
  onTimeEnd: () => void;
}) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    progress > 1 &&
      setTimeout(
        () => setProgress((prevProgress) => prevProgress - 1 * 0.1),
        50
      );

    progress < 1 && onTimeEnd();
    progress < 1 && setProgress(100);
  }, [progress]);

  const onClickHandler = (selectedIndex: number) => {
    if (selectedIndex === question.correctAnswerIndex) {
      onChoose(true, index);
    } else {
      onChoose(false, index, selectedIndex);
    }

    setProgress(100);
  };

  return (
    <div className="max-w-96 mx-auto">
      <h1 className="text-center text-3xl text-primary font-light">
        Question {index + 1}
      </h1>
      <h2 className="text-xl text-center mt-5">{question.question}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10 max-w-96 mx-auto">
        {question.answers.map((item, elIndex) => (
          <Button
            key={elIndex}
            onClick={() => onClickHandler(question.answers.indexOf(item))}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="mt-10 max-w-96 mx-auto">
        <Progress
          value={progress}
          className=" transition-all duration-150 ease-in"
        />
        <p className="text-center font-light mt-2">
          {Math.floor(progress / 1.65)} seconds left
        </p>
      </div>
    </div>
  );
};

export default QuizQuestion;
