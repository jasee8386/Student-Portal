// src/components/StudentForm.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent,editStudent } from "../redex/DataUpdate";
import { useNavigate, useParams } from "react-router-dom";

export default function StudentForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const students = useSelector((state) => state.students);
  const isEdit = Boolean(id);
  const existingStudent = students.find((s) => s.id === parseInt(id));

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isEdit && existingStudent) {
      setForm({
        name: existingStudent.name,
        email: existingStudent.email,
        phone: existingStudent.phone
      });
    }
  }, [isEdit, existingStudent]);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email format";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      id: isEdit ? parseInt(id) : Date.now(),
      ...form
    };

    isEdit ? dispatch(editStudent(payload)) : dispatch(addStudent(payload));
    navigate("/students");
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{isEdit ? "Edit Student" : "Add Student"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          {isEdit ? "Update" : "Add"} Student
        </button>
      </form>
    </div>
  );
}
