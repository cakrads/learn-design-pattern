import { useState, useEffect } from "react";

export type TUser = {
  id: string;
  name: string;
  age: number;
  address: string;
};

function useUser(url: string) {
  const [data, setData] = useState<TUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.data);
      } catch (error: unknown) {
        if (error instanceof Error) setError(error);
        setError(new Error("Unknown Error"));
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useUser;