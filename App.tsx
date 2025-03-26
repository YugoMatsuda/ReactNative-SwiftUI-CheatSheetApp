import RootStackNavigator from "./src/navigation/RootStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import "./global.css";

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
