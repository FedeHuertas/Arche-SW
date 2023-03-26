import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        setProducts(data.products)
    }

    useEffect(() =>{
        fetchProducts()
    }, [])

    return {products}
}

export default useProducts;