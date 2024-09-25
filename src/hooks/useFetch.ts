import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading };
};

export default useFetch;
