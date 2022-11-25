import {describe, expect, it, vi} from "vitest";
import {AddCategory} from '../../src/components';
import {fireEvent, render, screen} from "@testing-library/react";

describe('AddCategory', () => {
    it('should change the input value', () => {
        render(<AddCategory onNewCategory={() => {
        }}/>);
        const input = screen.getByRole('textbox');
        const value = 'Saitama';
        expect(input).toHaveValue('');
        fireEvent.change(input, {target: {value}});
        expect(input).toHaveValue(value);
    });
    it('should call onNewCategory if the input has a value', () => {
        const value = 'Saitama';
        const onNewCategory = vi.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.change(input, {target: {value}});
        fireEvent.submit(form);
        expect(input).toHaveValue('');
        expect(onNewCategory).toBeCalledWith(value);
    });
})
