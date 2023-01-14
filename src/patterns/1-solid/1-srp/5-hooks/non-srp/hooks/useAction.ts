import React, { useEffect, useState } from "react";

type TData = {
  id: string;
  name: string;
  age: number;
  address: string;
};

function useAction() {
  const [data, setData] = useState<TData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [filter, setFilter] = useState<string>("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/api/user");
        const result = await response.json();
        console.log({ result });
        setData(result.data);
      } catch (error: unknown) {
        if (error instanceof Error) setError(error);
        setError(new Error("Unknown Error"));
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [data, filter]);

  function onChangeFilter(e: React.ChangeEvent<HTMLInputElement>) {
    setFilter(e.target.value);
  }

  return {
    loading,
    error,
    filter,
    filteredData,
    onChangeFilter,
  };
}

export default useAction;