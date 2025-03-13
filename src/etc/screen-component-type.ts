import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type ParamList = {
  "Text Screen": undefined;
  "Button Screen": undefined;
  "Image Screen": undefined;
  "VStack Screen": undefined;
  "HStack Screen": undefined;
  "ZStack Screen": undefined;
  "Grid Screen": undefined;
  "List Screen": undefined;
};

export type ScreenComponentProps<RouteName extends keyof ParamList> = {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
};

export type ScreenComponentType<RouteName extends keyof ParamList> =
  React.ComponentType<ScreenComponentProps<RouteName>>;
