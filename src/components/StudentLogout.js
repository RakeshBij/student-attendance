import React from "react";
import { useNavigate } from "react-router-dom";

export const StudentLogout = () => {
  const navigate = useNavigate();

  async function studentLogoutHandler() {
    const studentId = localStorage.getItem("studentId");
    const payload = {
      checkOut: new Date(),
    };
    const res = await fetch(
      `https://attandance-e9337-default-rtdb.firebaseio.com/students/${studentId}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(payload),
        "Content-Type": "application/json",
      }
    );
    const data = await res.json();
    navigate(`/`);
  }
  return (
    <button class="button-89" role="button" onClick={studentLogoutHandler}>
      Logout
    </button>
  );
};
