import { FlatList, Text, View, StyleSheet, Pressable} from "react-native";
import ProductItem from "../components/ProductCard";
import theme from "../theme";
import { useCartContext } from "../context/CartContext";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Button from "../components/Button";


const CartScreen = () => {

    const { cart, sum, clearCart} = useCartContext()

    return (
        cart.length ?
        <>
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
            <View style={styles.footer}>
                <Button 
                    color={theme.colors.danger}
                    onPress={clearCart}
                >
                <MaterialCommunityIcons name="cart-remove" size={20} color="white" />
                </Button>
                <View style={theme.center}>
                    <Text style={styles.total}>Total</Text>
                    <Text style={styles.price}>${sum}</Text>
                </View>
                <Button>
                    <MaterialIcons name="attach-money" size={20} color="white" />
                </Button>
            </View>
        </>
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
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        backgroundColor: theme.colors.secondary
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingEnd: 2
    }
})