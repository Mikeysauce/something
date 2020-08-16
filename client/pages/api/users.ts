import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function getTodos(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data } = await axios.get("http://localhost:8000/users");
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(error?.response?.status || 503).send("");
  }
}
