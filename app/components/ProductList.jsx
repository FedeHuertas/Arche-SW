import { FlatList } from "react-native";
import products from "../data/products";
import ProductItem from "./ProductCard";

const ProductsList = () => {
    const data = products.products
    return (
        <FlatList
            data={data}
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