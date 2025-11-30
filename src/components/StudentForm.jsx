import { useState, useEffect } from "react";

export default function StudentForm({
  classes,
  blankStudent,
  studentToEdit,
  mutateStudent,
}) {
  const [student, setStudent] = useState({ ...studentToEdit });

  useEffect(() => {
    setStudent(studentToEdit);
  }, [studentToEdit]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit", student);
    mutateStudent(student);
  }

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.id;
    setStudent({ ...student, [name]: value });
  }

  return (
    <div>
      <p>
        Name: {student.name}, Age: {student.age}, email: {student.email},
        classes{student.classes}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="id">Id</label>
          <input
            className="form-control"
            id="id"
            type="text"
            readOnly
            placeholder="id"
            value={student.id}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            id="name"
            type="text"
            placeholder="Enter name"
            value={student.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            min="1"
            max="120"
            placeholder="Enter age"
            className="form-control"
            value={student.age}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            id="email"
            type="email"
            placeholder="Enter email"
            value={student.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="classes">Classes</label>
          <select
            className="form-select"
            id="classes"
            multiple
            value={student.classes || []}
            onChange={(e) => {
              const selected = Array.from(e.target.selectedOptions, (opt) =>
                Number(opt.value)
              );
              setStudent({ ...student, classes: selected });
            }}
          >
            {classes.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <button>Update</button>
        <button type="button" onClick={() => setStudent(blankStudent)}>
          Reset
        </button>
      </form>
    </div>
  );
}
