import { useState } from "react";
import "./App.css";
import MyCalendar from "./MyCalendar";
import Login from "./Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      {isLoggedIn ? <MyCalendar /> : <Login setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}

export default App;
