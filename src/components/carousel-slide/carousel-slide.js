import { React } from 'react';
import ProductDetails from '../product-details/product-details';
import './carousel-slide.css'

function CarosuelSlide(props) {
    return (
        <div className="carousel-slide">
            <img src="./product-images/product-1.jpg"
                className={props.isActive ? "active-product product-image" : "product-image"}
                alt="Product 1" />
            <ProductDetails product={props.product}></ProductDetails>
        </div>
    )
}
export default CarosuelSlide;