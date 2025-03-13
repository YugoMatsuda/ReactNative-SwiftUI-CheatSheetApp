import { View, Text } from "react-native";
import React from "react";

const ZStackScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="relative w-[100px] h-[100px] items-center justify-center">
        <View className="absolute w-[100px] h-[100px] bg-red-500 rounded-full" />
        <View className="absolute w-[80px] h-[80px] bg-green-500 rounded-full" />
        <View className="absolute w-[60px] h-[60px] bg-blue-500 rounded-full" />
      </View>

      <View className="relative w-[100px] h-[100px]">
        <View className="absolute w-[100px] h-[100px] bg-red-500 left-[50px] top-[50px] z-[2]" />
        <View className="absolute w-[100px] h-[100px] bg-green-500 z-[1]" />
        <View className="absolute w-[100px] h-[100px] bg-blue-500 left-[100px] top-[100px] z-[3]" />
      </View>
    </View>
  );
};

export default ZStackScreen;
