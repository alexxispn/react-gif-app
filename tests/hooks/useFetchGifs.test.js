import {describe, expect, it} from "vitest";
import {renderHook, waitFor} from "@testing-library/react";
import {useFetchGifs} from "../../src/hooks/useFetchGifs";

describe('AddCategory', () => {
    it('should show the initial state', () => {
        const {result} = renderHook(() => useFetchGifs('One Punch'));
        const {data, loading} = result.current;
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    it('should show an array of images and loading in false', async () => {
        const {result} = renderHook(() => useFetchGifs('One Punch'));
        await waitFor(
            () => {
                expect(result.current.data.length).toBe(10)
            }, {timeout: 3000});
        const {data, loading} = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});
