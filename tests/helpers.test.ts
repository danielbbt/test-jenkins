import { genereateUuid } from '../helpers/uuid';

describe('Test uuid generator helper file', () => {
    test('Should return non-empty string', () => {
        const uuid = genereateUuid();
        expect(uuid.length).not.toEqual(0);
    });
});