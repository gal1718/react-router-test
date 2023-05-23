import './App.css';

import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <h1>Learn React Router</h1>

      <br/>
      <Link to="/">Home</Link> {" | "}
      <Link to="/persons">Persons</Link> {" | "}
      <Link to="/cars">Cars</Link>
      <br/>
      <Outlet />

    </div>
  );
}

export default App;