import { useContext } from "react";
import { View, TextInput, StyleSheet, Text, Alert } from "react-native";
import { Formik, useField } from "formik";
import { loginValidationSchema } from "../validationSchemas/login";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { authContext } from "../context/AuthContext";

const RegisterScreen = () => {
    const initialValues = {
        email: '',
        password: ''
    }

    const navigation = useNavigation();
    const { register } = useContext(authContext)

    const createUser = async ({email, password}) => {
        try {
            await register(email, password)
            navigation.navigate('Shop')
        } catch (err) {
            Alert.alert(err)
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
        <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={values => createUser(values)}
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
                    <Button onPress={handleSubmit} >Register</Button>
                </>
            )}
        </Formik>
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
        fontSize: 18
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
    }
})

export default RegisterScreen;