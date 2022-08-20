import { PrismaClient } from "@prisma/client";
import { pokemons } from "./pokemon";
const prisma = new PrismaClient();

async function main() {
  // loops over pokemon and puts it in database
  for (let pokemon of pokemons) {
    await prisma.pokemon.create({
      data: pokemon,
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
