import { View, Text, StyleSheet, Image } from "react-native";
import theme from "../theme";

const ProductItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <Text style={styles.title} >{props.title}</Text>
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
        backgroundColor: theme.colors.fourth,
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
        color: theme.colors.primary,
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'flex-end', 
        fontSize: 18, 
        padding: 8
    }
})

export default ProductItem;