import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React from "react";

const PickerScreen = () => {
  const [selectedFruit, setSelectedFruit] = React.useState<string>("Apple");

  const fruits = [
    { id: "Apple", name: "Apple", color: "text-red-500" },
    { id: "Banana", name: "Banana", color: "text-yellow-500" },
    { id: "Orange", name: "Orange", color: "text-orange-500" },
    { id: "Grape", name: "Grape", color: "text-purple-500" },
  ];

  return (
    <View className="flex-1 justify-center">
      <Picker
        selectedValue={selectedFruit}
        onValueChange={(itemValue) => setSelectedFruit(itemValue)}
      >
        {fruits.map((fruit) => (
          <Picker.Item key={fruit.id} label={fruit.name} value={fruit.id} />
        ))}
      </Picker>
    </View>
  );
};

export default PickerScreen;
