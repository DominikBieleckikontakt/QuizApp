import { Link } from "react-router-dom";
import { Button } from "../UI/button";

const MainPage = () => {
  return (
    <div className="md:max-w-[64rem] mx-5 md:mx-auto mt-24">
      <h1 className="text-4xl text-primary text-center">
        Welcome to Quiz App!
      </h1>
      <p className="text-center mt-5">
        You will face <span className="font-bold text-primary">10</span>{" "}
        questions. You have only one minute to answer every question. You cannot
        return to previous questions after confirming your answer.
      </p>
      <p className="text-center mt-5">
        Rules are simple. Questions are harder. Good luck and have fun!
      </p>
      <div className="flex justify-center mt-16">
        <Button className="" size="lg" asChild>
          <Link to="/quiz">Start a game!</Link>
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
