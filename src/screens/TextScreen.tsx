import { View, Text } from "react-native";
import React from "react";

const TextScreen = () => {
  return (
    <View className="flex-1 justify-center">
      <Text className="text-center">Hello, world!</Text>
      <Text className="text-left text-red-500">Hello, world!</Text>
      <Text className="text-right font-bold">Hello, world!</Text>
    </View>
  );
};

export default TextScreen;
