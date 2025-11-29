import { useState, useEffect } from "react";
import "./styles/App.css";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import { fetchData } from "./utils/persistence";

function App() {
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);

  const APIURLClasses = "http://localhost:3000/classes";
  const APIURLStudents = "http://localhost:3000/students";

  function getClasses(callback) {
    fetchData(APIURLClasses, callback);
  }

  function getStudents(callback) {
    fetchData(APIURLStudents, callback);
  }

  useEffect(() => {
    getStudents((data) => setStudents(data));
  }, []);

  useEffect(() => {
    getClasses((data) => setClasses(data));
  }, []);

  return (
    <div>
      <h1 className="text-center p-3 display-4 text-primary mb-4">
        Student and Classes
      </h1>
      <StudentForm classes={classes} />
      <StudentList students={students} classes={classes} />
    </div>
  );
}

export default App;
