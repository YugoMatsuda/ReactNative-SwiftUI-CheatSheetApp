import { View, Alert, Button } from "react-native";
import React from "react";

const AlertScreen = () => {
  return (
    <View className="flex-1 justify-center items-center gap-y-1">
      <Button
        title="Show Alert"
        onPress={() => {
          Alert.alert("Alert", "This is an alert");
        }}
      />

      <Button
        title="Show Button Alert"
        onPress={() => {
          Alert.alert("Title", "message", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            {
              text: "Destructive",
              onPress: () => console.log("Destructive Pressed"),
              style: "destructive",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        }}
      />

      <Button
        title="Show Text input Alert"
        onPress={() => {
          Alert.prompt("Title", "Message", [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "Done",
              onPress: (text) => console.log(text),
            },
          ]);
        }}
      />
    </View>
  );
};

export default AlertScreen;
