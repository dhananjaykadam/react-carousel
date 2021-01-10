import { React, useState } from 'react';
import { useProducts } from '../../hooks/products-by-category';
import CarouselSlide from '../carousel-slide/carousel-slide';
import CategorySelector from '../category-selector/category-selector';
import './carousel.css';
function Carousel() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const products = useProducts(selectedCategory);

    const handleSelectedCategory = (event) => {
        setSelectedIndex(0);
        setSelectedCategory(event.target.value);
    }
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
                <CategorySelector
                    selectedCategory={selectedCategory}
                    onChange={handleSelectedCategory}>
                </CategorySelector>
            </div>
            <div className="carousel-slides">
                <button className="button-left" onClick={preProduct}> {'‹'} </button>
                {productList.map((product, index) => (
                    <CarouselSlide key={index} product={product} isActive={product.name === productList[1].name}></CarouselSlide>
                ))}
                <button className="button-right" onClick={nextProduct}>{'›'}</button>
            </div>
        </div>
    )
}

export default Carousel;