import { React } from 'react';
import CarosuelSlide from '../carousel-slide/carousel-slide';
import CategorySelector from '../category-selector/category-selector';
import './carousel.css';
function Carousel() {

    return (
        <div className="carousel-container">
            <div>
                <CategorySelector></CategorySelector>
            </div>
            <div className="carousel-slides">
                <button className="button-left"> {'‹'} </button>
                <CarosuelSlide></CarosuelSlide>
                <CarosuelSlide isActive={true}></CarosuelSlide>
                <CarosuelSlide></CarosuelSlide>
                <button className="button-right">{'›'}</button>
            </div>
        </div>
    )
}

export default Carousel;