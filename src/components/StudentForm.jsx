import { useState, useEffect } from "react";

export default function StudentForm() {
  const [student, setStudent] = useState("");

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="id">Id</label>
          <input
            className="form-control"
            id="id"
            type="number"
            readOnly
            placeholder="id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            id="name"
            type="text"
            placeholder="Enter name"
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            id="email"
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="class">Class</label>
          <select className="form-select" id="class">
            <option value="Math 101">Math 101</option>
            <option value="History 201">History 201</option>
          </select>
        </div>
      </form>
    </div>
  );
}
