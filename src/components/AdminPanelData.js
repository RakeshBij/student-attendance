import React from "react";

export const AdminPanelData = ({ name, checkIn, checkOut }) => {
  const timeI = checkIn.split("T")[1].slice(0, -5).split(":");
  const timeO = checkOut
    ? checkOut.split("T")[1].slice(0, -5).split(":")
    : checkOut;

  return (
    <tr>
      <td>{name}</td>
      {/* <td>{rollno}</td> */}
      <td>{`${checkIn.split("T")[0]} (${
        +timeI[1] >= 30 ? +timeI[0] + 6 : +timeI[0] + 5
      }:${+timeI[1] >= 30 ? +timeI[1] - 30 : +timeI[1] + 30}:${timeI[2]})`}</td>
      {checkOut ? (
        <td>{`${checkOut.split("T")[0]} (${
          +timeO[1] >= 30 ? +timeO[0] + 6 : +timeO[0] + 5
        }:${+timeO[1] >= 30 ? +timeO[1] - 30 : +timeO[1] + 30}:${
          timeO[2]
        })`}</td>
      ) : (
        <td style={{ color: "#57bd84" }}>Active</td>
      )}

      {/* <td>1:00</td> */}
    </tr>
  );
};
