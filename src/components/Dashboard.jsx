import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import { toast } from "react-toastify";

function Dashboard() {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers((prev) => [{ id: Math.random().toString(), ...newUser }, ...prev]);
    toast(`User added successfully!`, {
      type: "success",
      theme: "colored",
      autoClose: 2000,
    });
  };

  return (
    <div className="dashboardWrapper">
      <Form addUser={addUser} />
      <Table users={users} />
    </div>
  );
}

export default Dashboard;
