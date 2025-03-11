import { createStackNavigator } from "@react-navigation/stack";
import RootScreen from "../screens/RootScreen";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SwiftUI CheatSheet App" component={RootScreen} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
