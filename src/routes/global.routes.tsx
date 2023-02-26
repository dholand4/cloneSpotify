import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import AppRoutes from "./app.routes";
import Welcome from "../pages/Welcome";
import SearchInput from "../pages/Search/pages/SearchInput";

const Stack = createNativeStackNavigator();

export function GlobalRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home_Stack" component={AppRoutes} />
      <Stack.Screen name="SearchInput" component={SearchInput} />
    </Stack.Navigator>
  );
}
