import { View, Text } from "react-native";
import React from "react";

const VStackScreen = () => {
  return (
    <View className="flex-1 justify-center items-center gap-y-1">
      <View className="bg-red-500 flex-col items-center gap-y-4">
        <Text>Hello, world</Text>
        <Text>SwiftUI</Text>
        <Text>ReactNative</Text>
      </View>

      <View className="bg-green-500 flex-col items-start gap-y-4">
        <Text>Hello, world</Text>
        <Text>SwiftUI</Text>
        <Text>ReactNative</Text>
      </View>

      <View className="bg-blue-500 flex-col items-end gap-y-4">
        <Text>Hello, world</Text>
        <Text>SwiftUI</Text>
        <Text>ReactNative</Text>
      </View>
    </View>
  );
};

export default VStackScreen;
