import { NextApiRequest, NextApiResponse } from "next";

export default async function getNavigation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.send([
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/products",
      label: "Products",
    },
  ]);
}
