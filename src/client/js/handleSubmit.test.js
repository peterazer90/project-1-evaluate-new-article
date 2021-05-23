import {handleSubmit} from "./handleSubmit";

describe('Test, the function "handleSubmit()" should exist', () => {
    test('It should return true', async () => {
        expect(handleSubmit).toBeDefined();
    });
    test('It should return true', async () => {
        expect(typeof handleSubmit).toBe('function');
    });
});
