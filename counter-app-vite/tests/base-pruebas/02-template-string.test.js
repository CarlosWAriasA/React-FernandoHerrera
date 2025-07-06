import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Tests in <02-template-string.js>", () => {
    test("getSaludo should return 'Hello Carlos'", () => {
        const name = "Carlos";
        const message = getSaludo(name);
        expect(message).toBe(`Hello ${name}`);
    });
});