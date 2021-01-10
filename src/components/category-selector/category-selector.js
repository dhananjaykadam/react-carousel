import { React } from 'react';
import './category-selector.css'

function CategorySelector() {
    return (
        <div className="category-selector">
            <label className="category-select-label">Select product type:</label>
            <select className="category-select" value={'Furniture'}>
                <option className="select-option" value="Furniture">Furniture</option>
                <option className="select-option" value="Furniture1">Furniture1</option>
                <option className="select-option" value="Furniture2">Furniture2</option>
            </select>

        </div>
    )
};

export default CategorySelector;