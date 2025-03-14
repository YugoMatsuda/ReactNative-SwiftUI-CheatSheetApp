import React from "react";
import { ScrollView, View, Text } from "react-native";

const ScrollViewScreen = () => {
  const fruits = [
    { id: "Apple", name: "Apple", bgColor: "bg-red-500" },
    { id: "Banana", name: "Banana", bgColor: "bg-yellow-500" },
    { id: "Orange", name: "Orange", bgColor: "bg-orange-500" },
    { id: "Grape", name: "Grape", bgColor: "bg-purple-500" },
  ];

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <View className="h-[200px]">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="flex-row">
            {fruits.map((fruit) => (
              <View
                key={fruit.id}
                className={`w-[200px] aspect-square ${fruit.bgColor} justify-center items-center m-2`}
              >
                <Text>{fruit.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ScrollViewScreen;
