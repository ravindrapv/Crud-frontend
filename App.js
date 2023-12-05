// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/Auth/LoginScreen";
import RegisterScreen from "./src/screens/Auth/RegisterScreen";
import ProductsList from "./src/screens/Products/ProductsList";
import ProductDetail from "./src/screens/Products/ProductDetail";
import AddProduct from "./src/screens/Products/AddProduct";
import UpdateProduct from "./src/screens/Products/UpdateProduct";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ProductsList" component={ProductsList} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
        <Stack.Screen name="UpdateProduct" component={UpdateProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
