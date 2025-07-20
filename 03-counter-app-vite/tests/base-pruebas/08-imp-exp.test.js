import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe("Tests in <08-imp-exp.js>", () => {
    test("getHeroeById should return a hero by id", () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test("getHeroeById should return undefined if hero does not exist", () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    });

    test("getHeroeByOwner should return an array of heroes from DC", () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
    });

    test("getHeroeByOwner should return an array of heroes from Marvel", () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
    });
});