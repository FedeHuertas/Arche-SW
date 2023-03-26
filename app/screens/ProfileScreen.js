import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";

const ProfileScreen = () => {

    const navigation = useNavigation()

    const { user, logout } = useContext(authContext)

    const handleLogOut = async () => {
        await logout()
        navigation.navigate('Access')
    }

    return (
        <>
            <Text>user: {user.email}</Text>
            <Button onPress={handleLogOut} >Logout</Button>
        </>
    )
}

export default ProfileScreen