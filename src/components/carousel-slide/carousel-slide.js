import { React } from 'react';
import './carousel-slide.css'

function CarosuelSlide(props) {
    return (
        <div className="carousel-slide">
            <img src="./product-images/product-1.jpg"
                className={props.isActive ? "active-product product-image": "product-image"}
                alt="Product image 1" />
        </div>
    )
}
export default CarosuelSlide;