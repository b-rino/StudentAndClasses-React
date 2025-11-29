import { useState, useEffect } from "react";

export default function StudentList({ students, classes }) {
  //For at lave Class id'er om til navne
  const classMap = classes.reduce((acc, c) => {
    acc[c.id] = c.name;
    return acc;
  }, {});

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Student List</h2>
      <table className="table table-striped table-hover table-bordered align-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Classes</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={crypto.randomUUID()}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>
                {student.classes.map((classId) => classMap[classId]).join(", ")}
              </td>
              <td>
                <div className="btn-group" role="group">
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
