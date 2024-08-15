import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./login";
import Register from "./reg";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="App">
      {isLogin ? (
        <Login key="login" toggleForm={toggleForm} />
      ) : (
        <Register key="register" toggleForm={toggleForm} />
      )}
    </div>
  );
}

export default App;
