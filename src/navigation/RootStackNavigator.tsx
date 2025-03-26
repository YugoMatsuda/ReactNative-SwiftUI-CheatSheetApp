import { createStackNavigator } from "@react-navigation/stack";
import RootScreen from "../screens/RootScreen";
import { SwiftUIComponentUtils } from "../etc/swift-ui-component";
import { SwiftUINavigationUtils } from "../etc/swift-ui-navigations";

const Stack = createStackNavigator();

function RootStackNavigator() {
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
          options={{ title: SwiftUIComponentUtils.title(item) }}
        />
      ))}
      {SwiftUINavigationUtils.allCases().map((item) => (
        <Stack.Screen
          key={SwiftUINavigationUtils.screenName(item)}
          name={SwiftUINavigationUtils.screenName(item)}
          component={
            SwiftUINavigationUtils.componentType(
              item
            ) as React.ComponentType<any>
          }
          options={{
            title: SwiftUINavigationUtils.title(item),
            presentation: SwiftUINavigationUtils.presentationStyle(item),
            headerShown: SwiftUINavigationUtils.headerShown(item),
          }}
        />
      ))}
    </Stack.Navigator>
  );
}

export default RootStackNavigator;
