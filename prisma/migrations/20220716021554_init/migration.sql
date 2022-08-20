-- CreateTable
CREATE TABLE "Pokemon" (
    "id" SERIAL NOT NULL,
    "pokemonName" TEXT NOT NULL,
    "pokemonType" TEXT NOT NULL,
    "pokemonImage" TEXT NOT NULL,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);
