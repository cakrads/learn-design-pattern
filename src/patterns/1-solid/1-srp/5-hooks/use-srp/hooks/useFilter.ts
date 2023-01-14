import { useEffect, useState } from "react";
import { TUser } from "./useUser";

function useFilter(data: TUser[]) {
  const [filter, setFilter] = useState<string>("");
  const [filteredData, setFilteredData] = useState(data);

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

  return { filter, filteredData, onChangeFilter };
}

export default useFilter;