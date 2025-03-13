import { View, Text, FlatList } from "react-native";
import React from "react";

const ListScreen = () => {
  const fruits = [
    { id: "Apple", name: "Apple", color: "text-red-500" },
    { id: "Banana", name: "Banana", color: "text-yellow-500" },
    { id: "Orange", name: "Orange", color: "text-orange-500" },
    { id: "Grape", name: "Grape", color: "text-purple-500" },
  ];

  return (
    <View className="flex-1 justify-center bg-white">
      <FlatList
        data={fruits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="px-4 py-2 border-b border-gray-100">
            <Text className={item.color}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListScreen;
