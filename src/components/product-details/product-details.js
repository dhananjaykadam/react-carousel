import { React } from 'react';
import './product-details.css';

function ProductDetails(props) {
    const { product } = props;
    return (
        <div className="product-details">
            <span className="product-name">Product Name: {product.name}</span>
            <span className="product-price">Price: ${product.price}</span>
        </div>
    );
}

export default ProductDetails;