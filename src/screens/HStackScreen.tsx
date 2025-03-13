import { View, Text } from "react-native";
import React from "react";

const HStackScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="flex-row items-center gap-x-4 bg-red-500">
        <Text className="text-[16px]">Hello World</Text>
        <Text className="text-[24px]">SwiftUI</Text>
        <Text className="text-[32px]">ReactNative</Text>
      </View>

      <View className="flex-row items-start gap-x-4 bg-green-500">
        <Text className="text-[16px]">Hello World</Text>
        <Text className="text-[24px]">SwiftUI</Text>
        <Text className="text-[32px]">ReactNative</Text>
      </View>

      <View className="flex-row items-end gap-x-4 bg-blue-500">
        <Text className="text-[16px]">Hello World</Text>
        <Text className="text-[24px]">SwiftUI</Text>
        <Text className="text-[32px]">ReactNative</Text>
      </View>
    </View>
  );
};

export default HStackScreen;
