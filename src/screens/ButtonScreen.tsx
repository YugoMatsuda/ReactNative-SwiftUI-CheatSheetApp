import { View, Text, Button, TouchableOpacity, Alert } from "react-native";
import React from "react";

const ButtonScreen = () => {
  return (
    <View className="flex-1 justify-center">
      {/* If you don't wrap Button in View, the tap area will be full screen width. */}
      <View className="self-center">
        <Button
          title="Button"
          onPress={() => {
            console.log("didTap Button");
          }}
        />
      </View>

      <TouchableOpacity
        className="bg-blue-500 px-4 py-2 self-center"
        onPress={() => {
          console.log("didTap Text Button");
        }}
      >
        <Text className="text-white">Text Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonScreen;
