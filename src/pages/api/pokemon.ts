// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const pokemon = async (req: NextApiRequest, res: NextApiResponse) => {
  const pokemon = await prisma.pokemon.findMany();
  res.status(200).json(pokemon);
};

export default pokemon;
