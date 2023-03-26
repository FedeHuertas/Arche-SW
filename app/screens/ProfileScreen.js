import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import { View, Text } from "react-native";
import Button from "../components/Button";

const ProfileScreen = () => {

    const { user, logout } = useContext(authContext)

    return (
        <>
            <Text>user: {user.email}</Text>
            <Button onPress={logout} >Logout</Button>
        </>
    )
}

export default ProfileScreen