import { React, useEffect, useState } from 'react';
import { fetchProducts } from '../../services/product-service';
import CarosuelSlide from '../carousel-slide/carousel-slide';
import CategorySelector from '../category-selector/category-selector';
import './carousel.css';
function Carousel() {
    const [products, setProducts] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const products = fetchProducts();
        setProducts(products);
    }, []);

    const nextProduct = () => {
        if (selectedIndex < products.length - 3)
            setSelectedIndex(selectedIndex + 1);
    }
    const preProduct = () => {
        if (selectedIndex > 0)
            setSelectedIndex(selectedIndex - 1);
    }

    const productList = products.slice(selectedIndex, selectedIndex + 3);

    return (
        <div className="carousel-container">
            <div>
                <CategorySelector></CategorySelector>
            </div>
            <div className="carousel-slides">
                <button className="button-left" onClick={preProduct}> {'‹'} </button>
                {productList.map(product => (
                    <CarosuelSlide key={product.Name} product={product} isActive={product.name === productList[1].name}></CarosuelSlide>
                ))}
                <button className="button-right" onClick={nextProduct}>{'›'}</button>
            </div>
        </div>
    )
}

export default Carousel;