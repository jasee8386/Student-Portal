// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { studentDetailsLoader } from "./components/StudentDetails.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import StudentList from "./components/StudentList.jsx";
import StudentDetails from "./components/StudentDetails.jsx";
import StudentForm from "./components/StudentForm.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

import { Provider } from "react-redux";
import StudentData from "./redex/StudentData.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "students", element: <StudentList /> },
      { path: "student/new", element: <StudentForm /> },
      { path: "student/edit/:id", element: <StudentForm /> },
      { path: "student/:id", element: <StudentDetails />,
        loader:studentDetailsLoader
       }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={StudentData}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
