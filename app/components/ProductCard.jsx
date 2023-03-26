import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import theme from "../theme";

const ProductItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title} >{props.title}</Text>
                <Pressable>
                    <View style={styles.addToCart}>
                        <Feather name="shopping-cart" color={theme.colors.primary} />
                    </View>
                </Pressable>
            </View>
            <View style={{flexDirection: "row", paddingTop: 5}}>
                <Image style={styles.image} source={{ uri: props.thumbnail}} />
                <Text style={{flex: 1, paddingStart: 10}}>{props.description}</Text>
                <Text style={styles.price} >${props.price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 6,
        marginTop: 5,
        padding: 15,
        paddingTop: 5,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: theme.colors.primary
    },
    title: {
        color: theme.colors.primary,
        fontWeight: 'bold',
        fontSize: 16
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 5
    },
    price: {
        color: theme.colors.fourth,
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'flex-end', 
        fontSize: 20, 
        padding: 8
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingEnd: 5,
        paddingTop: 5
    },
    addToCart: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
    }
})

export default ProductItem;