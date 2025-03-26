import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const NavigationStackScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamList>>();
  const [param, setParam] = React.useState("");
  return (
    <View className="flex-1 justify-center items-center gap-y-1">
      <Button
        title="Push Screen A222"
        onPress={() => navigation.navigate("ScreenA")}
      />
      <TextInput
        placeholder="Screen B Param"
        value={param}
        onChangeText={setParam}
        className="border border-gray-300 p-2"
      />

      <Button
        title="Push Screen B with text input param"
        onPress={() => navigation.navigate("ScreenB", { receivedParam: param })}
      />
    </View>
  );
};

type ParamList = {
  NavigationStackScreen: undefined;
  ScreenA: undefined;
  ScreenB: { receivedParam: string };
};

type NavigationProp = StackNavigationProp<ParamList>;

const ScreenA = () => {
  const [param, setParam] = React.useState("");
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="flex-1 justify-center items-center gap-y-1">
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Screen A</Text>

      <TextInput
        placeholder="Screen B Param"
        value={param}
        onChangeText={setParam}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 8,
          marginBottom: 16,
          borderRadius: 4,
        }}
      />

      <Button
        title="Push Screen B with text input param"
        onPress={() => navigation.navigate("ScreenB", { receivedParam: param })}
      />

      <Button title="Pop" onPress={() => navigation.goBack()} />

      <Button
        title="Pop to root"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "NavigationStackScreen" }],
          })
        }
      />
    </View>
  );
};

const ScreenB = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProp<ParamList, "ScreenB">>();
  const { receivedParam } = route.params;

  return (
    <View className="flex-1 justify-center items-center gap-y-1">
      <Text style={{ fontSize: 24, marginBottom: 16 }}>
        {receivedParam || "Empty Param"}
      </Text>

      <Button
        title="Push Screen A"
        onPress={() => navigation.navigate("ScreenA")}
      />

      <Button title="Pop" onPress={() => navigation.goBack()} />

      <Button
        title="Pop to root"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "NavigationStackScreen" }],
          })
        }
      />
    </View>
  );
};

const Stack = createStackNavigator();

function NavigationStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="NavigationStackScreen">
      <Stack.Screen
        name="NavigationStackScreen"
        component={NavigationStackScreen}
        options={{
          title: "NavigationStack",
        }}
      />
      <Stack.Screen
        name="ScreenA"
        component={ScreenA}
        options={{
          title: "Screen A",
        }}
      />
      <Stack.Screen
        name="ScreenB"
        component={ScreenB}
        options={{
          title: "Screen B",
        }}
      />
    </Stack.Navigator>
  );
}

export default NavigationStackNavigator;
