import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./MyCalendar.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GetAllAppointments } from "./context/Context";
const MyCalendar = (props) => {
  const [appointments, setAppointments] = useState([]);
  const { num } = useContext(GetAllAppointments);
  useEffect(() => {
    axios
      .get(
        "https://shlomit-00e660508931.herokuapp.com/appointments/get-appointments-with-info",
        {
          headers: { authorization: "bearer " + localStorage.token },
        }
      )
      .then((res) => {
        console.log(res.data);
        const approvedAppointments = res.data.filter((appointment) => {
          return appointment.status === "approved";
        });
        setAppointments(
          approvedAppointments.map((appointment, i) => {
            return {
              id: i,
              title: appointment.patientName,
              start: new Date(appointment.time),
              end: new Date(
                new Date(appointment.time).setHours(
                  new Date(appointment.time).getHours() + 2
                )
              ),
            };
          })
        );
        props.setPendingAppointments(
          res.data.filter((appointment) => {
            return appointment.status === "pending";
          })
        );
      })
      .catch((err) => console.log(err));
  }, [num]);
  useEffect(() => {
    console.log(appointments);
  }, [appointments]);
  const localizer = momentLocalizer(moment);
  return (
    <div className="myCustomHeight">
      <Calendar
        localizer={localizer}
        events={appointments}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};
export default MyCalendar;
