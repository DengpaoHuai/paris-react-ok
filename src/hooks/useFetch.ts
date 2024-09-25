import { useEffect, useState } from "react";

const useFetch = <TData>(url: string) => {
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    setLoading(true);
    getData()
      .catch((error: unknown) => {
        if (error instanceof Error) {
          setError(error.message);
        } else if (typeof error === "string") {
          setError(error);
        } else {
          setError("An error occured");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    loading,
    error,
    data,
    refetch: () => getData(),
  };
};

export default useFetch;
