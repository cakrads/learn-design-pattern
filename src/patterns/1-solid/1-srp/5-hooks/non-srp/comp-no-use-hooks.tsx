import React, { useState, useEffect } from "react";

type TData = {
  id: string;
  name: string;
  age: number;
  address: string;
};

function UserTable() {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      Find Name: <input value={filter} onChange={onChangeFilter} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
