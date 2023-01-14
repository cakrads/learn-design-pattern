import React from "react";
import { useFilter, useUser } from "./hooks";

function DataTable() {
  const { data, loading, error } = useUser("http://localhost:3000/api/user");
  const { filter, filteredData, onChangeFilter } = useFilter(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <input value={filter} onChange={onChangeFilter} />
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

export default DataTable;
