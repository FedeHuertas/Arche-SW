import { FlatList, Text, View, StyleSheet, Pressable} from "react-native";
import ProductItem from "../components/ProductCard";
import theme from "../theme";
import { useCartContext } from "../context/CartContext";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Button from "../components/Button";


const CartScreen = () => {

    const { cart, sum } = useCartContext()

    return (
        cart.length ?
        <>
{/*             <Pressable>
                <MaterialCommunityIcons name="delete-circle-outline" size={24} color="black" />
            </Pressable> */}
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
                <Text style={styles.total}>Total: ${sum}</Text>
                <Button>Buy now</Button>
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
        marginHorizontal: 25
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})