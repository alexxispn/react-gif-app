import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {GifGrid} from '../../src/components';
import {useFetchGifs} from "../../src/hooks/useFetchGifs.js";

vi.mock('../../src/hooks/useFetchGifs.js');

describe('GifGrid', () => {
    const category = 'One Punch';
    it('should show Loading... when loading', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        render(<GifGrid category={category}/>);
        const p = screen.getByText('Loading...');
        expect(p).toBeInTheDocument();
        expect(screen.getByText(category)).toBeInTheDocument();
    });
    it('should show items when loading is done', () => {
        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/abc.jpg',
                title: 'ABC title',
            },
            {
                id: '123',
                url: 'https://localhost/123.jpg',
                title: '123 title',
            }
        ];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(gifs.length);
        const firstGif = gifs[0];
        const firstGifImg = screen.getByAltText(firstGif.title);
        expect(firstGifImg).toHaveAttribute('src', firstGif.url);
    });
});





