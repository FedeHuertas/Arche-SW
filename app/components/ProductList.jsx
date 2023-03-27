import { FlatList, ActivityIndicator, View, Text } from "react-native";
import ProductItem from "./ProductCard";
import theme from "../theme";

import useProducts from "../hooks/useProducts";
import { useCartContext } from '../context/CartContext';


const ProductsList = () => {

    const { products } = useProducts();
    const { cart } = useCartContext();

    return (
        products.length ?
        <FlatList
            data={products}
            renderItem={({item: p}) => (
                <ProductItem
                    id={p.id}
                    title={p.title}
                    description={p.description}
                    price={p.price}
                    thumbnail={p.thumbnail}
                    inCart={cart.find(prod => p.id === prod.id)}
                />
            )}
        >
        </FlatList>
        :
        <View style={theme.center}>
            <ActivityIndicator 
                size={'large'}
                color={theme.colors.primary}
            />
        </View>
    )
}

export default ProductsList;