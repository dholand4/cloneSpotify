import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";
import Search from "../pages/Search";
import Library from "../pages/Library";

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Search} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
}
