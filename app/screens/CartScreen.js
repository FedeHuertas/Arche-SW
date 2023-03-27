import { FlatList, Text, View} from "react-native";
import ProductItem from "../components/ProductCard";
import theme from "../theme";
import { useCartContext } from "../context/CartContext";

const CartScreen = () => {

    const { cart } = useCartContext()

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
                    inCart={true}
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