import { useState } from "react";
import "./App.css";
import MyCalendar from "./MyCalendar";
import Login from "./Login";
import PendingAppointments from "./PendingAppointments";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pendingAppointments, setPendingAppointments] = useState([]);
  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <MyCalendar setPendingAppointments={setPendingAppointments} />
          <PendingAppointments pendingAppointments={pendingAppointments} />
        </div>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
