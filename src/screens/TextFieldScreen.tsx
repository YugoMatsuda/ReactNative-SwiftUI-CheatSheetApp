import { View, Text, TextInput } from "react-native";
import React from "react";

const TextFieldScreen = () => {
  const [text, onChangeText] = React.useState("");

  return (
    <View className="flex-1 justify-center p-4">
      <TextInput
        className="border border-gray-300 p-2"
        onChangeText={(text) => {
          onChangeText(text);
          console.log("onChangeText", text);
        }}
        value={text}
        placeholder="Placeholder"
      />
    </View>
  );
};

export default TextFieldScreen;
