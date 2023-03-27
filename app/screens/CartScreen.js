import { FlatList, Text, View, StyleSheet} from "react-native";
import ProductItem from "../components/ProductCard";
import theme from "../theme";
import { useCartContext } from "../context/CartContext";
import { MaterialCommunityIcons } from '@expo/vector-icons';


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
            <MaterialCommunityIcons name="cart-remove" size={100} color={theme.colors.inactive} />
            <Text style={styles.empty}>Empty cart</Text>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    empty: {
        fontSize: 25,
        color: theme.colors.inactive,
        fontWeight: 'bold',
        margin: 8
    }
})