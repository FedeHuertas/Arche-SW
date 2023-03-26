import { useContext } from "react";
import { View, TextInput, StyleSheet, Text, Pressable, Alert } from "react-native";
import { Formik, useField } from "formik";
import { loginValidationSchema } from "../validationSchemas/login";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { authContext } from "../context/AuthContext";
import theme from "../theme";

const LoginScreen = () => {
    const initialValues = {
        email: '',
        password: ''
    }

    const navigation = useNavigation()
    const { login } = useContext(authContext)

    const sigin = async ({email, password}) => {
        try {
            await login(email, password)
            navigation.navigate('Shop')
        } catch (err) {
            Alert.alert(err.message)
        }
    }
    
    const FormikTextField = ({ name, ...props}) => {
        const [field, meta, helpers] = useField(name)
        return (
            <>
                <TextInput
                    error={meta.error}
                    style={[styles.inputText, meta.error && styles.errorField]}
                    onChangeText={value => helpers.setValue(value)}
                    value={field.value}
                    {...props}
                />
                {meta.error && <Text style={styles.error}>{meta.error}</Text>}
            </>
        )
    }

    return (
        <View style={{alignItems: 'center'}}>
            <Formik
                initialValues={initialValues}
                validationSchema={loginValidationSchema}
                onSubmit={values => sigin(values)}
            >
                {({handleChange, handleSubmit, values}) => (
                    <>
                        <View style={styles.formView} >
                            <FormikTextField
                                name='email'
                                onChangeText={handleChange('email')}
                                placeholder="email"
                                value={values.email}
                            />
                            <FormikTextField
                                name='password'
                                onChangeText={handleChange('password')}
                                placeholder="password"
                                value={values.password}
                                secureTextEntry={true}
                            />
                        </View>
                        <Button disabled onPress={handleSubmit} >Log-in</Button>
                        <Pressable
                            onPress={()=>navigation.navigate('Register')}
                        >
                            <Text style={styles.registerLink}>Register</Text>
                        </Pressable>
                    </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    inputText: {
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 50,
        marginTop: 30,
        padding: 10,
        paddingStart: 15,
        fontSize: 18,
        width: 350
    },
    error: {
        color: 'red',
        paddingLeft: 50,
        fontSize: 12
    },
    errorField: {
        borderColor: 'red'
    },
    submitButton: {
        color: "green"
    },
    formView: {
        paddingBottom: 20
    },
    registerLink: {
        color: theme.colors.third,
        textDecorationLine: 'underline',
        flexGrow: 1
    }
})

export default LoginScreen;