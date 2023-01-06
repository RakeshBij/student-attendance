import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        class="button-89"
        role="button"
        style={{ marginRight: 30 }}
        onClick={() => {
          navigate("/student-login");
        }}
      >
        Student Login
      </button>
      <button
        class="button-89"
        role="button"
        onClick={() => {
          navigate("/admin-login");
        }}
      >
        Admin Login
      </button>
    </div>
  );
};
