import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Tests in <09-promesas.js>', () => { 
    test("getHeroByIdAsync should return an hero", (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then( hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
            done();
        })
    });

    test("getHeroByIdAsync should get an error if hero does not exist", (done) => {
        const id = 100;
        getHeroeByIdAsync(id).then( hero => {
            expect(hero).toBeFalsy();
            done();
        }).catch( err => {
            expect(err.message).toBe(`No se pudo encontrar el héroe con id ${id}`);
            done();
        })
    });
 })