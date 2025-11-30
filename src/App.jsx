import { useState, useEffect } from "react";
import "./styles/App.css";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import { fetchData } from "./utils/persistence";

function App() {
  const blankStudent = {
    id: "",
    name: "",
    age: "",
    email: "",
    classes: [],
  };

  // useStates
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [studentToEdit, setStudentToEdit] = useState(blankStudent);

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

  // Delete student
  function deleteById(id) {
    fetchData(`${APIURLStudents}/${id}`, () => {}, "DELETE");
    setStudents([...students].filter((student) => student.id != id));
  }

  // Create and update student
  function createStudent(student) {
    fetchData(
      APIURLStudents,
      (student) => setStudents([...students, student]),
      "POST",
      student
    );
  }

  function updateStudent(student) {
    fetchData(
      `${APIURLStudents}/${student.id}`,
      (student) => {
        setStudents(
          students.map((s) => (s.id === student.id ? { ...student } : s))
        );
      },
      "PUT",
      student
    );
  }

  function mutateStudent(student) {
    if (student.id != "") {
      updateStudent(student);
    } else {
      createStudent(student);
    }
  }

  //edit student
  function editStudent(student) {
    setStudentToEdit(student);
  }

  return (
    <div>
      <h1 className="text-center p-3 display-4 text-primary mb-4">
        Student and Classes
      </h1>
      <StudentForm
        classes={classes}
        createStudent={createStudent}
        blankStudent={blankStudent}
        studentToEdit={studentToEdit}
        mutateStudent={mutateStudent}
      />
      <StudentList
        students={students}
        classes={classes}
        deleteById={deleteById}
        editStudent={editStudent}
      />
    </div>
  );
}

export default App;
