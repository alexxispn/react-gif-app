import {useState} from "react";

export const GifApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const onAddCategory = () => setCategories(['HunterXHunter', ...categories]);
    return (
        <>
            <h1>GifApp</h1>
            <ol>
                {categories.map(category => (
                    <li key={category}>{category}</li>
                ))}
            </ol>
            <button onClick={onAddCategory}>Agregar</button>
        </>
    )
}
