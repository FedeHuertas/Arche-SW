import { FlatList, Text, View} from "react-native";
import ProductItem from "../components/ProductCard";
import theme from "../theme";

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
        <View style={theme.center}>
            <Text>Empty cart</Text>
        </View>
    )
}

export default CartScreen