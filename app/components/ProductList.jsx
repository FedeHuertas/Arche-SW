import { FlatList, ActivityIndicator, View, Text } from "react-native";
import ProductItem from "./ProductCard";
import theme from "../theme";

import useProducts from "../hooks/useProducts";

const ProductsList = () => {

    const { products } = useProducts();

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
                />
            )}
        >
        </FlatList>
        :
        <View style={{
            justifyContent: 'center',
            flexGrow: 1
        }}>
            <ActivityIndicator 
                size={'large'}
                color={theme.colors.primary}
            />
        </View>
    )
}

export default ProductsList;