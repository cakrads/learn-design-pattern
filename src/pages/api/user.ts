// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type TData = {
  id: string;
  name: string;
  age: number;
  address: string;
};

type TResponse = {
  data: TData[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TResponse>
) {

  const data: TData[] = [
    { id: "1", name: "Cakra", age: 20, address: "ID" },
    { id: "2", name: "Danu", age: 20, address: "ID" },
    { id: "3", name: "Sedayu", age: 20, address: "ID" },
  ];

  const response: TResponse = { data };

  res.status(200).json(response);
}
