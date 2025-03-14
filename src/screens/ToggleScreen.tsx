import { View, Text, Switch } from "react-native";
import React from "react";

const ToggleScreen = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View className="flex-1 justify-center　items-center">
      <Switch onChange={toggleSwitch} value={isEnabled} />
    </View>
  );
};

export default ToggleScreen;
