import React from 'react'
import { useParams,useLoaderData, Link } from "react-router-dom";

import axios from "axios";

export async function studentDetailsLoader({ params }) {
const students=JSON.parse(localStorage.getItem("students"))||[];
const student=students.find((student)=>student.id.toString()===params.id);
if(student){
 return student;
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    return res.data;
  } catch (err) {
    throw new Response("Student not found", { status: 404 });
  }
}}

const StudentDetails = () => {
   const { id } = useParams();
const student = useLoaderData();
if (!student) {
    return <p className="text-red-500 text-center mt-10">Student not found.</p>;
  }
 const { name, email, phone } = student;

  return (
   <div className="flex justify-center mt-10">
     
<div className="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2149464866.jpg" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Student Details</h2>
    <p>Showing details for student with ID: {id}</p>
    <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Phone:</strong> {student.phone || "N/A"}</p>
    <div className="card-actions justify-end">
        <Link to="/students">
        <button className="btn btn-primary">Back to List</button>
      </Link>
     
    </div>
  </div>
</div>
  
    </div>
  )
}

export default StudentDetails