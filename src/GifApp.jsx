import {useState} from "react";
import {AddCategory, GifGrid} from "./components";

export const GifApp = () => {
    const [categories, setCategories] = useState(['Arcane', 'Rick y morty', 'Hunter x Hunter']);
    const onAddCategory = (category) => {
        if (!categories.includes(category)) {
            setCategories([category, ...categories]);
        } else {
            const newCategories = categories.filter(c => c !== category);
            setCategories([category, ...newCategories]);
        }
    }
    return (
        <>
            <h1>GifApp</h1>
            <AddCategory onNewCategory={onAddCategory}/>
            {categories.map(category => (
                <GifGrid key={category} category={category}/>
            ))}
        </>
    )
}
