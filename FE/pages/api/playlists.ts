import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { customGet } from "../../utils/customGet";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  const playlists = await customGet(
    "http://localhost:8080/v1/me/playlists",
    session
  );

  res.status(200).json(playlists);
}
