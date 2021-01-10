import { React } from 'react';
import './category-selector.css'

function CategorySelector() {
    return (
        <div className="category-selector">
            <label className="category-select-label">Select product category:</label>
            <select className="category-select" value={'Furniture'}>
                <option className="select-option" value="Furniture">Furniture</option>
                <option className="select-option" value="Furniture">Furniture</option>
                <option className="select-option" value="Furniture">Furniture</option>
            </select>

        </div>
    )
};

export default CategorySelector;