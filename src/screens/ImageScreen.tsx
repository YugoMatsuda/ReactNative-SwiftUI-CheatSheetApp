import { View, Text, Image } from "react-native";
import React from "react";

const ImageScreen = () => {
  return (
    <View className="flex-1 justify-center">
      <Image
        className="w-[100px] h-[100px] self-center"
        source={require("../../assets/favicon.png")}
      />
      <Image
        className="w-[100px] h-[100px] self-center"
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
    </View>
  );
};

export default ImageScreen;
