import { useState, useEffect } from "react";

export default function StudentList() {
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
          <tr>
            <td>1</td>
            <td>Alice</td>
            <td>20</td>
            <td>alice@example.com</td>
            <td>Math 101, History 201</td>
            <td>
              <div className="btn-group" role="group">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
