import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

const Button = ({children, disabled, ...props}) => {
    return (
        <>
            <Pressable style={{alignItems: 'center'}} onPress={props.onPress}>
                <View style={[styles.button, disabled && styles.buttonDisabled]} >
                    <Text style={styles.text}>{children}</Text>
                </View>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 30,
        backgroundColor: theme.colors.third,
        width: 150,
        margin: 10
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    disabled: {

    }
})

export default Button