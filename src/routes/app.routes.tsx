import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import Home from "../pages/Home";
import Search from "../pages/Search";
import Library from "../pages/Library";

import { Octicons } from "@expo/vector-icons";

import homeIcon from "../assets/icons/home.png";
import searchIcon from "../assets/icons/search.png";
import lib_outlineIcon from "../assets/icons/lib-outline.png";
import libIcon from "../assets/icons/lib.png";

import { ThemeContext } from "styled-components";

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  const { colors } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
          height: 70,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
        },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.text,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Início",
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image source={homeIcon} style={{ width: 26, height: 26 }} />
              );
            } else {
              return <Octicons name="home" size={26} color={colors.text} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Search}
        options={{
          title: "Buscar",
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image source={searchIcon} style={{ width: 29, height: 29 }} />
              );
            } else {
              return <Octicons name="search" size={26} color={colors.text} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          title: "Sua Biblioteca",
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={focused ? libIcon : lib_outlineIcon}
                style={{ width: 26, height: 26 }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
