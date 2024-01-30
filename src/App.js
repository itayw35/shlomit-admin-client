import { useState } from "react";
import "./App.css";
import MyCalendar from "./MyCalendar";
import Login from "./Login";
import PendingAppointments from "./PendingAppointments";
import { GetAllAppointments } from "./context/Context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.token);
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      {isLoggedIn ? (
        <GetAllAppointments.Provider value={{ num, setNum }}>
          <div>
            <MyCalendar setPendingAppointments={setPendingAppointments} />
            <PendingAppointments pendingAppointments={pendingAppointments} />
          </div>
        </GetAllAppointments.Provider>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
