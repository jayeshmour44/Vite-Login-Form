import React, { useContext, useState } from "react";
import { UserDetailsContext } from "../Context/UserDetailsContext";
import "./userinfo.css";
import { VscEdit, VscTrash } from "react-icons/vsc";


const UserInfo = () => {
  const { details, addDetail, deleteDetail, updateDetail } = useContext(UserDetailsContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.mobile) return;

    if (editIndex !== null) {
      // Update existing user
      updateDetail(editIndex, data);
      setEditIndex(null);
    } else {
      // Add new user
      addDetail(data);
    }

    setData({ name: "", email: "", mobile: "" });
  };

  const handleEdit = (index) => {
    setData(details[index]);
    setEditIndex(index);
  };

  const handleCancel = () => {
    setEditIndex(null);
    setData({ name: "", email: "", mobile: "" });
  };

  return (
    <div className="userinfo-container">

      <h1 className="userinfo-title">
        {editIndex !== null ? "Edit User Info" : "Add User Info"}
      </h1>

      <form onSubmit={handleSubmit} className="userinfo-form">
        <input
          type="text"
          placeholder="Name"
          className="userinfo-input"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="userinfo-input"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input
          type="text"
          placeholder="Mobile"
          className="userinfo-input"
          value={data.mobile}
          onChange={(e) => setData({ ...data, mobile: e.target.value })}
        />

        <button className="userinfo-button">
          {editIndex !== null ? "Update" : "Add"}
        </button>

        {editIndex !== null && (
          <button
            type="button"
            onClick={handleCancel}
            className="userinfo-cancel"
          >
            Cancel
          </button>
        )}
      </form>

      <table className="userinfo-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {details.map((d, index) => (
            <tr key={index}>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.mobile}</td>

              <td>
                <button
                  className="userinfo-edit-btn"
                  onClick={() => handleEdit(index)}
                >
                  <VscEdit size = {20}/>
                </button>

                <button
                  className="userinfo-delete-btn"
                  onClick={() => deleteDetail(index)}
                >
                  <VscTrash size = {20}/> 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default UserInfo;
