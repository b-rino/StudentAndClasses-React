import { useState, useEffect } from "react";
import "./styles/App.css";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-center p-3 display-4 text-primary mb-4">
        Student and Classes
      </h1>
      <StudentForm />
      <StudentList />
    </div>
  );
}

export default App;
