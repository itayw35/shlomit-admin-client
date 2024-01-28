import React from "react";
import PendingAppointment from "./PendingAppointment";
import "./PendingAppointments.css";
function PendingAppointments(props) {
  return (
    <div id="pending-appointments">
      {props.pendingAppointments.map((appointment) => {
        return <PendingAppointment appointment={appointment} />;
      })}
    </div>
  );
}

export default PendingAppointments;
