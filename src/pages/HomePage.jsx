import { Link } from "react-router-dom";
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149464866.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"> Welcome To Students Portal</h1>
      <p className="mb-5">
        Manage student information effortlessly. Access, update, and organize student records all in one place.
      </p>
  <Link to="/students">
   <button className="btn btn-primary"> View Students</button>
   </Link>
    </div>
  </div>
</div>

    </div>
  );
}

export default HomePage