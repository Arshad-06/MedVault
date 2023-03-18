import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SuccessfulPage = () => {
  const location = useLocation();
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:5000/admin/${location.state.aadhaar}`,
        {
          method: "GET",
        }
      );
      const json = await response.json();
      setUser(json);
    };
    fetchData();
  }, []);
  if (!user) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="text-light">
      <h3>Name: {user.name}</h3>
      <h3>Contact: {user.contact}</h3>
      <h3>You're admitted!</h3>
    </div>
  );
};

export default SuccessfulPage;
