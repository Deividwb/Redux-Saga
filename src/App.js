import React from "react";
import ToDoList from "./components/ToDoList";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <ToDoList />
    </>
  );
}

export default App;
