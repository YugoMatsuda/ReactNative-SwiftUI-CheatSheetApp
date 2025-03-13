import { View, Text, FlatList } from "react-native";
import React from "react";

const GridScreen = () => {
  const items = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`);
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item}
      numColumns={3}
      renderItem={({ item }) => (
        <View className="w-1/3 aspect-square bg-red-500 border border-black items-center justify-center">
          <Text>{item}</Text>
        </View>
      )}
    />
  );
};

export default GridScreen;
