import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage.tsx";
import Layout from "./components/UI/Layout.tsx";
import ContactPage from "./components/Contact/ContactPage.tsx";
import QuizPage from "./components/Quiz/QuizPage.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/quiz", element: <QuizPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
