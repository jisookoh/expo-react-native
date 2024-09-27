import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

import SignIn from "./screens/signin";
import SignUp from "./screens/signup";

import Screen1 from "./screens/example/Screen1";
import Screen2 from "./screens/example/Screen2";
import Screen3 from "./screens/example/Screen3";
import Screen4 from "./screens/example/Screen4";
import Screen5 from "./screens/example/Screen5";
import Screen6 from "./screens/example/Screen6";

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

const StackScreen = ({ children }: { children: ReactElement }) => {
  return (
    <Stack.Navigator initialRouteName="">
      <Stack.Screen
        name="Home"
        component={BottomStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Top1 = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Top1 Screen1" component={Screen1} />
      <TopTab.Screen name="Top1 Screen2" component={Screen2} />
    </TopTab.Navigator>
  );
};

const Top2 = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Top2 Screen4" component={Screen4} />
      <TopTab.Screen name="Top2 Screen5" component={Screen5} />
      <TopTab.Screen name="Top2 Screen6" component={Screen6} />
    </TopTab.Navigator>
  );
};

const BottomStack = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="탭 메뉴1"
        component={Top1}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="home" size={32} color={"gray"} />,
        }}
      />
      <BottomTab.Screen
        name="가운데"
        component={Screen3}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="phone" size={32} color={"gray"} />,
        }}
      />
      <BottomTab.Screen
        name="탭 메뉴2"
        component={Top2}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="email" size={32} color={"gray"} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackScreen>
        <BottomStack />
      </StackScreen>
    </NavigationContainer>
  );
}
