import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();

  let token = window.localStorage.getItem("token");

  const getData = async () => {
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      "Content-type": "application/json",
    });
    const data = await response.json();
    if (data) {
      setData(data);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, setData, token };
};
