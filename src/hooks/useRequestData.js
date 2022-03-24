import { useEffect, useState } from "react";
import axios from "axios";

export default function useRequestData(initialData, url, recharge) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const headers = {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    };
    axios
      .get(url, { headers })
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response);
      });
  }, [url, recharge]);
  return [data, isLoading, error];
}
