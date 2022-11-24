import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {GifGridItem} from '../../src/components';

describe('GifGridItem', () => {
    const title = 'Saitama';
    const url = 'https://onepunchman.com/saitama.jpg';
    it('should match snapshot', () => {
        const wrapper = render(<GifGridItem title={title} url={url}/>);
        expect(wrapper).toMatchSnapshot();
    });
    it('should have a paragraph with the title', () => {
        render(<GifGridItem title={title} url={url}/>);
        const p = screen.getByText(title);
        expect(p).toBeInTheDocument();
    });
    it('should have an image with the url and alt of the props', () => {
        render(<GifGridItem title={title} url={url}/>);
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', url);
        expect(img).toHaveAttribute('alt', title);
    });
});
