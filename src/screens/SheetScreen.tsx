import { View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { CardStyleInterpolators } from "@react-navigation/stack";

const SheetScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamList>>();
  return (
    <View className="flex-1 justify-center items-center gap-y-1">
      <Button title="Show Sheet" onPress={() => navigation.navigate("Sheet")} />
      <Button
        title="Show fullScreenCover"
        onPress={() => navigation.navigate("FullScreenCover")}
      />
    </View>
  );
};

type ParamList = {
  SheetScreen: undefined;
  Sheet: undefined;
  FullScreenCover: undefined;
};

type NavigationProp = StackNavigationProp<ParamList>;

const SheetDetailScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="flex-1 justify-center items-center gap-y-1">
      <Button title="Dismiss" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Stack = createStackNavigator();

function SheetStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="SheetScreen">
      <Stack.Screen
        name="SheetScreen"
        component={SheetScreen}
        options={{
          title: "Sheet",
        }}
      />
      <Stack.Screen
        name="Sheet"
        component={SheetDetailScreen}
        options={{
          title: "Sheet",
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FullScreenCover"
        component={SheetDetailScreen}
        options={{
          title: "FullScreenCover",
          presentation: "modal",
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
    </Stack.Navigator>
  );
}

export default SheetStackNavigator;
