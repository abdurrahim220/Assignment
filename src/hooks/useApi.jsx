import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const useApi = () => {
  const [data, setData] = useState([]);

  console.log(data)

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div>useApi</div>;
};

export default useApi;
