import { FlatList, Text } from "react-native";
import ProductItem from "../components/ProductCard";

const CartScreen = () => {

    const cart = []

    return (
        cart.length ?
        <FlatList
            data={cart}
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
        <Text>Empty cart (in progres...)</Text>
    )
}

export default CartScreen