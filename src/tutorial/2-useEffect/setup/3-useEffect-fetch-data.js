import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const respose = await fetch(url);
    const users = await respose.json();
    console.log(users);
    setUsers(users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>Github Users</h3>
    </>
  );
};

export default UseEffectFetchData;
