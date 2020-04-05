import { useEffect, useState } from "react";

export const useFetch = (url, setLoading) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
        setTimeout(() => setLoading(false), 1);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [setLoading, url]);
  return { response, error };
};
