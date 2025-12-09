import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProductsScreen from "./Screens/ProductsScreen";

const Tab = createMaterialTopTabNavigator();

const MiniProject = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Mobiles & Electronics" component={ProductsScreen} initialParams={{ category: "Mobiles" }} />
            <Tab.Screen name="Dresses" component={ProductsScreen} initialParams={{ category: "Dresses" }} />
            <Tab.Screen name="Groceries" component={ProductsScreen} initialParams={{ category: "Groceries" }} />
        </Tab.Navigator>
    );
};

export default MiniProject;
