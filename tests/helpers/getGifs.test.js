import {describe, expect, it} from "vitest";
import {getGifs} from "../../src/helpers/getGifs";

describe('getGifs Fetch', () => {
    it('should return an array of objects', async () => {
        const gif = {
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        };
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
        expect(gifs).toEqual(expect.arrayContaining([gif]));
    });
})
