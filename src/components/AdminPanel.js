import React, { Fragment, useEffect, useState } from "react";
import { AdminPanelData } from "./AdminPanelData";
import { useNavigate } from "react-router-dom";

export const AdminPanel = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState();
  const [students, setStudents] = useState([]);

  async function fetchStudents() {
    const res = await fetch(
      "https://attandance-e9337-default-rtdb.firebaseio.com/students.json"
    );
    const data = await res.json();
    setStudents(Object.values(data));
  }
  useEffect(() => {
    fetchStudents();
  }, []);
  const today = new Date();
  const readableDate = today.toLocaleDateString("en-us", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  useEffect(() => {
    setDate(
      `${readableDate.split("/")[2]}-${readableDate.split("/")[0]}-${
        readableDate.split("/")[1]
      }`
    );
  }, []);

  function changeDate(e) {
    setDate(e.target.value);
  }
  return (
    <>
      <div className="wt-bg">
        <div className="ap-top">
          <div>
            Currently active :
            <span style={{ color: "#57bd84", marginLeft: "4px" }}>
              {
                students.filter((i) => {
                  return !i.checkOut && date === i.checkIn.split("T")[0];
                }).length
              }
            </span>
          </div>
          <div>
            Total no. of students on {date} :
            <span style={{ color: "#57bd84", marginLeft: "4px" }}>
              {
                students.filter((i) => {
                  return i.checkIn && date === i.checkIn.split("T")[0];
                }).length
              }
            </span>
          </div>
          <div>
            <form className="form">
              {/* <label for="date-picker">Select a Date</label> */}
              <input
                type="date"
                id="date-picker"
                className="cal"
                value={date}
                max={`${readableDate.split("/")[2]}-${
                  readableDate.split("/")[0]
                }-${readableDate.split("/")[1]}`}
                onChange={changeDate}
              />
              {/* <button type="submit">Submit</button> */}
            </form>
          </div>
          <span
            className="ad-logout"
            onClick={() => {
              navigate("/");
            }}
          >
            Logout
          </span>
        </div>
        <Fragment>
          <table>
            <thead>
              <tr>
                <th>Name / Roll no</th>
                <th>Loged-in at:</th>
                <th>Loged-out at:</th>
              </tr>
            </thead>
            <tbody>
              {students.map((i) => {
                if (date === i.checkIn.split("T")[0]) {
                  return (
                    <AdminPanelData
                      name={i?.name}
                      checkIn={i?.checkIn}
                      checkOut={i?.checkOut}
                      //   key={i?.id}
                    />
                  );
                }
              })}
            </tbody>
          </table>
        </Fragment>
      </div>
    </>
  );
};
