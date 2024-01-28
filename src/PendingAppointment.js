import React, { useContext } from "react";
import "./PendingAppointment.css";
import axios from "axios";
import { GetAllAppointments } from "./context/Context";
function PendingAppointment(props) {
  const { num, setNum } = useContext(GetAllAppointments);
  const approveAppointment = () => {
    axios
      .put(
        "https://shlomit-00e660508931.herokuapp.com/appointments/approve-appointment",
        {
          id: props.appointment._id,
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
        <button>ביטול</button>
        <button onClick={approveAppointment}>אישור</button>
      </div>
    </div>
  );
}

export default PendingAppointment;
