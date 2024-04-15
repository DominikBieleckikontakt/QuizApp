import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Question } from "types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const randomizeQuestions = (questions: Question[], range: number) => {
  let allQuestions: Question[] = [];

  for (let i = 0; i < range; i++) {
    let randomNum = Math.floor(Math.random() * questions.length);

    while (
      allQuestions.find(
        (item) => item.question === questions[randomNum].question
      ) !== undefined
    ) {
      randomNum = Math.floor(Math.random() * questions.length);
    }

    allQuestions.push(questions[randomNum]);
  }

  return allQuestions;
};
