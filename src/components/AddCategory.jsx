import {useState} from "react";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (e) => setInputValue(e.target.value);
    const onFormSubmit = (e) => {
        e.preventDefault();
        const category = inputValue.trim();
        if (category.length > 0) {
            onNewCategory(category);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Search a gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
