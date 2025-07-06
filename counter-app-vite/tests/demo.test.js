describe("Tests in <DemoComponent />", () => {
    test("this test should not be failed", () => {
        // initialize the test
        const firstMessage = "Hello World";
        // execute the test
        const message = firstMessage.trim();
        // observe the results
        expect(firstMessage).toBe(message);
    });    
});