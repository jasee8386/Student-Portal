import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./styles/global.css";


const App = () => {
  return (
    <div>
      <nav className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Student Portal</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/students" className="text-blue-600 hover:underline">Students</Link>
    </ul>
  </div>
</nav>
<main className="p-8">
        <Outlet />
      </main>

    </div>
  )
}

export default App