import { useEffect, useState } from "react";
import { fetchProducts } from "../services/product-service";

export function useProducts(selectedCategory) {
    const [fetchedProducts, setFetchedProducts] = useState([]);

    useEffect(() => {
        const products = fetchProducts();
        setFetchedProducts(products);
    }, []);

    return fetchedProducts.filter(p => p.category === selectedCategory || selectedCategory === "ALL");
}