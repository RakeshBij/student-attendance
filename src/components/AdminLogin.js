import React from "react";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const navigate = useNavigate();

  const admin = {
    userName: "admin",
    password: "admin123",
  };

  function adminLoginHandler(e) {
    e.preventDefault();

    if (
      e.target.userName.value === admin.userName &&
      e.target.password.value === admin.password
    ) {
      navigate("/admin-panel");
    } else {
      alert("Either user name or password is wrong");
    }
  }
  return (
    <div class="login-form">
      <form onSubmit={adminLoginHandler}>
        {/* <h1>Login</h1> */}
        <div
          className="back"
          onClick={() => {
            navigate("/");
          }}
        >
          &larr;
        </div>
        <div class="content">
          <div class="input-field">
            <input type="text" placeholder="Username" name="userName" />
          </div>
          <div class="input-field">
            <input
              type="password"
              placeholder="Password"
              autocomplete="new-password"
              name="password"
            />
          </div>
        </div>
        <div class="action">
          <button>Sign in</button>
        </div>
      </form>
    </div>
  );
};
