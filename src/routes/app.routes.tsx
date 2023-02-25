import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, SafeAreaView } from "react-native";

import Play from "../components/Play";

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
    <>
      <SafeAreaView style={{ flex: 1 }}>
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
              paddingLeft: 30,
              paddingRight: 30,
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
                    <Image
                      source={homeIcon}
                      style={{ width: 25, height: 25 }}
                    />
                  );
                } else {
                  return <Octicons name="home" size={25} color={colors.text} />;
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
                    <Image
                      source={searchIcon}
                      style={{ width: 28, height: 28 }}
                    />
                  );
                } else {
                  return (
                    <Octicons name="search" size={25} color={colors.text} />
                  );
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
                    style={{ width: 24, height: 24 }}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
        <Play />
      </SafeAreaView>
    </>
  );
}
