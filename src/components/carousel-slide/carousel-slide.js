import { React } from 'react';
import ProductDetails from '../product-details/product-details';
import './carousel-slide.css'

function CarouselSlide(props) {
    return (
        <div className={props.isActive ? "carousel-slide active-product" : "carousel-slide"}>
            <img src={`./product-images/${props.product.imageName}`}
                key={props.product.imageName}
                className={props.isActive ? "product-image active-image" : "product-image"}
                alt={props.product.imageName} />
            <ProductDetails product={props.product}></ProductDetails>
        </div>
    )
}
export default CarouselSlide;