import { z } from "zod";

export const pokemonSchema = z.object({
    id: z.number(),
    name: z.string(),
    types: z.array(
        z.object({
            type: z.object({
                name: z.string(),
            }),
        }).transform((val) => val.type.name)
    ),
    sprites: z.object({
        front_default: z.string(),
    })
}).transform((val) => ({
    numero: val.id,
    nome: val.name,
    tipos: val.types,
    sprite: val.sprites.front_default,
}));

export type Pokemon = z.infer<typeof pokemonSchema>;

