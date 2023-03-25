import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";

import { Feather } from '@expo/vector-icons';

import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import theme from "./app/theme";
import CartScreen from "./app/screens/CartScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.inactive,
                tabBarShowLabel:false
            }}    
        >
            <Tab.Screen 
                name="Shop"
                style={styles.tabIcon}
                component={HomeScreen}
                options={{
                    tabBarIcon:({color}) => (
                        <Feather name="shopping-bag" size={26} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon:({color}) => (
                        <Feather name="shopping-cart" size={26} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Access"
                component={MyStack}
                options={{
                    tabBarIcon:({color}) => (
                        <Feather name="log-in" size={26} color={color} />
                    ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
      );
}

export default function Navegacion() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabIcon: {
        color: theme.colors.primary
    }
})