import {GifGridItem} from "./GifGridItem.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js";
import PropTypes from "prop-types";

export const GifGrid = ({category}) => {
    const {data: images, loading} = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading...</p>}
            <div className="card-grid">
                {images.map(img => (
                    <GifGridItem key={img.id} {...img}/>
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

