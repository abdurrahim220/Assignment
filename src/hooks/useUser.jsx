// useUser.js
import { useState, useEffect } from "react";
import axios from "axios";

const useUser = () => {
  const [data, setData] = useState([]);
  

  // console.log(searchTerm)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/users");
        setData(res?.data?.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return [data];
};

export default useUser;
