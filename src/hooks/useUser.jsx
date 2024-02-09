import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const useUser = () => {
  const [data, setData] = useState([]);

  // console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/users");
        setData(res.data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return [data];
};

export default useUser;
