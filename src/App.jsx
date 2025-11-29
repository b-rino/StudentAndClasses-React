import { useState, useEffect } from "react";
import "./styles/App.css";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import { fetchData } from "./utils/persistence";

function App() {
  // useStates
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);

  // URL variables
  const APIURLClasses = "http://localhost:3000/classes";
  const APIURLStudents = "http://localhost:3000/students";

  // Initial fetching
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

  // Delete
  function deleteById(id) {
    fetchData(`${APIURLStudents}/${id}`, () => {}, "DELETE");
    setStudents([...students].filter((student) => student.id != id));
  }

  return (
    <div>
      <h1 className="text-center p-3 display-4 text-primary mb-4">
        Student and Classes
      </h1>
      <StudentForm classes={classes} />
      <StudentList
        students={students}
        classes={classes}
        deleteById={deleteById}
      />
    </div>
  );
}

export default App;
