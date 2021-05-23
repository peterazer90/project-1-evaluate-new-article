import {checkURL} from "./checkURL";

describe('Test, the function "checkURL()" should exist', () => {
    test('It should return true', async () => {
        expect(checkURL).toBeDefined();
    });
    test('It should return true', async () => {
        checkURL('test', (str) => {
            expect(str).toBe('https://jamesclear.com/3-2-1/april-22-2021')
            done();
        })
    });
});
