import React, { useContext } from "react";
import "./PendingAppointment.css";
import axios from "axios";
import { GetAllAppointments } from "./context/Context";
function PendingAppointment(props) {
  const { num, setNum } = useContext(GetAllAppointments);
  const updateAppointment = (e) => {
    const status = e.target.id === "approve-button" ? "approved" : "cancelled";
    axios
      .put(
        "https://shlomit-00e660508931.herokuapp.com/appointments/update-appointment",
        {
          id: props.appointment._id,
          status: status,
        },
        {
          headers: { authorization: "bearer " + localStorage.token },
        }
      )
      .then((res) => {
        console.log(res.data);
        setNum(num + 1);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="appointment-box">
      <div>{props.appointment.patientName}</div>
      <div>
        {new Date(props.appointment.time).getDate()}/
        {new Date(props.appointment.time).getMonth() + 1}/
        {new Date(props.appointment.time).getFullYear()}{" "}
      </div>
      <div>
        {new Date(props.appointment.time).getHours()}:
        {new Date(props.appointment.time).getMinutes()}0
      </div>
      <div className="appointment-buttons">
        <button id="cancel-button" onClick={updateAppointment}>
          ביטול
        </button>
        <button id="approve-button" onClick={updateAppointment}>
          אישור
        </button>
      </div>
    </div>
  );
}

export default PendingAppointment;
