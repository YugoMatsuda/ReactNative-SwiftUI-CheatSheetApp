import { Text, View, SectionList, TouchableOpacity } from "react-native";
import React from "react";
import { sections, SectionData, SectionItem } from "../etc/sections";
import { useNavigation } from "@react-navigation/native";
import {
  SwiftUIComponent,
  SwiftUIComponentUtils,
} from "../etc/swift-ui-component";
import { SwiftUINavigation } from "../etc/swift-ui-navigations";

const RootScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <SectionList<SectionItem, SectionData>
      sections={sections}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            if (
              Object.values(SwiftUIComponent).includes(
                item.key as SwiftUIComponent
              )
            ) {
              const componentKey = item.key as SwiftUIComponent;
              navigation.navigate(
                SwiftUIComponentUtils.screenName(componentKey)
              );
            } else if (
              Object.values(SwiftUINavigation).includes(
                item.key as SwiftUINavigation
              )
            ) {
              const navigationKey = item.key as SwiftUINavigation;
            }
          }}
        >
          <View
            style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}
          >
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={{ backgroundColor: "#f0f0f0", padding: 10 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>{title}</Text>
        </View>
      )}
    />
  );
};

export default RootScreen;
