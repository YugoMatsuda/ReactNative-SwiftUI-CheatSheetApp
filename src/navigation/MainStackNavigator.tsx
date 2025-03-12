import { createStackNavigator } from "@react-navigation/stack";
import RootScreen from "../screens/RootScreen";
import {
  SwiftUIComponentUtils,
} from "../etc/swift-ui-component";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SwiftUI CheatSheet App" component={RootScreen} />
      {SwiftUIComponentUtils.allCases().map((item) => (
        <Stack.Screen
          key={SwiftUIComponentUtils.screenName(item)}
          name={SwiftUIComponentUtils.screenName(item)}
          component={
            SwiftUIComponentUtils.componentType(
              item
            ) as React.ComponentType<any>
          }
        />
      ))}
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
