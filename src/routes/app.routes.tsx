import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Play from "../components/Play";

import Home from "../pages/Home";

import Library from "../pages/Library";

import { Octicons } from "@expo/vector-icons";

import homeIcon from "../assets/icons/home.png";
import searchIcon from "../assets/icons/search.png";
import lib_outlineIcon from "../assets/icons/lib-outline.png";
import libIcon from "../assets/icons/lib.png";

import { ThemeContext } from "styled-components";
import SearchHome from "../pages/Search/pages/SearchHome";

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          enabled={false}
        >
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: {
                position: "absolute",
                backgroundColor: colors.backgroundTab,
                borderTopWidth: 0,
                elevation: 0,
                height: 65,
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 30,
                paddingRight: 30,
              },
              tabBarActiveTintColor: colors.white,
              tabBarInactiveTintColor: colors.gray,
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
                    return (
                      <Octicons name="home" size={25} color={colors.gray} />
                    );
                  }
                },
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SearchHome}
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
                      <Octicons name="search" size={25} color={colors.gray} />
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
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}
