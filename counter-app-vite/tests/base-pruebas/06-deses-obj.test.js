import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Tests in <06-deses-obj.js>", () => {
    test("should return an object", () => {
        const name = "Carlos";
        const age = 21;
        const country = "Dominican Republic";
        const user = {
            nombreClave: name,
            anios: age,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };
        const info = usContext({nombre: name, edad: age, clave: name});
        expect(info).toEqual(user);
    });
});