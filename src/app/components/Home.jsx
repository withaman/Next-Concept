"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Home() {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [fetchProduct, setFetchProduct] = useState([]);

  const formHandling = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fetchData = async () => {
    const res = await axios.get("/api");
    setFetchProduct(res.data.t2);
  };

  const formSubmission = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api", formData);
    toast.success(res.data.message);
    setFormData({ title: "", description: "" });
    fetchData();
  };

  const deleteData = async (id) => {
    const res = await axios.delete("/api", { data: { id } });
    toast.warning(res.data.message);
    fetchData();
  };

  const updateData = async (id) => {
    const res = await axios.put("/api", null, {
      params: { id }
    });

    if (res.data.success) {
      toast.success(res.data.message);
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <form onSubmit={formSubmission} className="max-w-[800px] w-[80%] mx-auto mt-24 flex flex-col gap-3">
        <input
          value={formData.title}
          name="title"
          onChange={formHandling}
          className="border-2 p-2"
          placeholder="Title"
        />
        <textarea
          value={formData.description}
          name="description"
          onChange={formHandling}
          className="border-2 p-2"
          placeholder="Description"
        />
        <button className="bg-orange-400 py-3">Submit</button>
      </form>

      <div className="max-w-[800px] mx-auto p-6">
        <h2 className="text-4xl text-center">Information Table</h2>

        <table className="border w-full mt-4">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {fetchProduct.map((i, index) => (
              <tr key={i._id}>
                <td>{index + 1}</td>
                <td>{i.title}</td>
                <td>{i.description}</td>
                <td>{i.isCompleted ? "Completed" : "Pending"}</td>
                <td className="flex gap-3 justify-center py-2">
                  <button onClick={() => deleteData(i._id)} className="bg-red-400 p-2">
                    Delete
                  </button>
                  <button onClick={() => updateData(i._id)} className="bg-green-400 p-2">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
