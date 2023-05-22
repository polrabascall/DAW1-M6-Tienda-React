import { useState } from "react";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { MainMenu } from "./components/MainMenu";
import "./App.css";

export function App() {
  const [view, setView] = useState("register");

  // Function to change the view between registration and login
  function changeView(ev) {
    // If the current view is "login", change to "register", and vice versa
    view === "login" ? setView("register") : setView("login");
  }

  // Function to render the corresponding view
  function renderView(ev) {
    switch (view) {
      case "register":
        return <Register />;
      case "login":
        return <Login />;
      case "main":
        return <MainMenu />;
      default:
        break;
    }
  }

  return (
    <>
      <div className="appContainer">
        {renderView()}<br/>
        <button onClick={changeView}>CHANGE VIEW</button>
      </div>
    </>
  );
}
