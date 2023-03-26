import { FlatList } from "react-native";
import ProductItem from "./ProductCard";

import useProducts from "../hooks/useProducts";

const ProductsList = () => {

    const { products } = useProducts();

    return (
        <FlatList
            data={products}
            renderItem={({item: p}) => (
                <ProductItem
                    id={p.id}
                    title={p.title}
                    description={p.description}
                    price={p.price}
                    thumbnail={p.thumbnail}
                />
            )}
        >
        </FlatList>
    )
}

export default ProductsList;