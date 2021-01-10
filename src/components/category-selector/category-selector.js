import { React } from 'react';
import './category-selector.css'

function CategorySelector(props) {
    return (
        <div className="category-selector">
            <label className="category-select-label">Select product category:</label>
            <select className="category-select" value={props.selectedCategory} onChange={props.onChange}>
                <option className="select-option" value="ALL">All</option>
                <option className="select-option" value="Furniture">Furniture</option>
                <option className="select-option" value="Food">Food</option>
            </select>
        </div>
    )
};

export default CategorySelector;