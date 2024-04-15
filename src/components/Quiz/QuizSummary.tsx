import React from "react";

const QuizSummary = ({
  points,
  wrong,
}: {
  points: number;
  wrong: {
    question: string;
    correct: string;
    wrong: string;
  }[];
}) => {
  return (
    <div className="max-w-96 mx-auto">
      <h1 className="text-3xl text-center text-primary font-semibold">
        Your quiz summary
      </h1>
      <p className="text-center text-2xl mt-5">
        Points: <span className="text-primary font-semibold">{points}</span> /
        10
      </p>
      <div className="mt-10">
        {wrong.length > 0 &&
          wrong.map((item, index) => (
            <div key={index} className="my-10 text-xl text-center">
              <div className="font-semibold my-2">{item.question}</div>
              <div>
                Your answer:{" "}
                <span className="text-red-600 font-semibold">{item.wrong}</span>
              </div>
              <div>
                Correct answer:{" "}
                <span className="text-green-600 font-semibold">
                  {item.correct}
                </span>
              </div>
            </div>
          ))}
        {wrong.length === 0 && (
          <p className="text-green-600 text-xl text-center">
            Congrats! You answered correctly to every question!
          </p>
        )}
      </div>
    </div>
  );
};

export default QuizSummary;
