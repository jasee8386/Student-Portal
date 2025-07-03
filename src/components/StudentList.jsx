import React , { useEffect, useState }from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setStudents,deleteStudent } from '../redex/DataUpdate';
import { Link } from "react-router-dom";
import axios from "axios";

const StudentList = () => {
      const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch(setStudents(res.data));
        localStorage.setItem("students", JSON.stringify(res.data))
      } catch (error) {
        console.error("Failed to fetch students", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [dispatch]);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this student?")) {
      dispatch(deleteStudent(id));
    }
  };

  if (loading) return <p className="text-center py-4">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Student List</h2>
        <Link to="/student/new" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add Student
        </Link>
      </div>
      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-2 text-blue-800 ">Name</th>
              <th className="text-left p-2 text-blue-800 ">Email</th>
              <th className="text-left p-2 text-blue-800 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="p-2">{student.name}</td>
                <td className="p-2">{student.email}</td>
                <td className="p-2 space-x-2">
                  <Link to={`/student/${student.id}`} className="text-blue-600 hover:underline">View</Link>
                  <Link to={`/student/edit/${student.id}`} className="text-green-600 hover:underline">Edit</Link>
                  <button onClick={() => handleDelete(student.id)} className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default StudentList