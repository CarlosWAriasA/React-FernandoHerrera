import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Tests in <11-async-await.js>', () => { 
    test("getImagen should return an url", async () => {
        const url = await getImagen();
        expect(typeof url).toBe('string');
    });
});