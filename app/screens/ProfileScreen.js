import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import theme from "../theme";

const ProfileScreen = () => {

    const navigation = useNavigation()

    const { user, logout } = useContext(authContext)

    const handleLogOut = async () => {
        await logout()
        navigation.navigate('Access')
    }

    return (
        <View style={{alignItems: 'center', marginTop: 50}}>
            <Text style={{fontSize: 20}} >{user.email}</Text>
            <Button color={theme.colors.danger} onPress={handleLogOut} >Logout</Button>
        </View>
    )
}

export default ProfileScreen