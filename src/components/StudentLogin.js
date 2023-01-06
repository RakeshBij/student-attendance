import React from "react";
import { useNavigate } from "react-router-dom";

export const StudentLogin = () => {
  const navigate = useNavigate();
  async function studentLoginHandler(e) {
    e.preventDefault();
    const studentInput = e.target.search.value;
    const payload = {
      name: studentInput,
      checkIn: new Date(),
    };
    const res = await fetch(
      "https://attandance-e9337-default-rtdb.firebaseio.com/students.json",
      {
        method: "POST",
        body: JSON.stringify(payload),
        "Content-Type": "application/json",
      }
    );
    const data = await res.json();
    localStorage.setItem("studentId", data.name);
    navigate("/student-logout");
  }
  return (
    <div>
      <form className="st-form" role="search" onSubmit={studentLoginHandler}>
        <input
          className="st-input"
          id="search"
          type="search"
          name="search"
          placeholder="Roll number/Name"
          autofocus
          required
        />
        <button type="submit" className="st-button">
          Go
        </button>
      </form>
    </div>
  );
};
