import { ScreenComponentType } from "../etc/screen-component-type";
import NavigationStackNavigator from "../screens/NavigationStackScreen";
import SheetStackNavigator from "../screens/SheetScreen";
import SheetScreen from "../screens/SheetScreen";
import { ComponentType } from "react";
enum SwiftUINavigation {
  NavigationStack = "navigationstack",
  Sheet = "sheet",
}
export { SwiftUINavigation };

const SwiftUINavigationMap = {
  [SwiftUINavigation.NavigationStack]: {
    component: NavigationStackNavigator as ScreenComponentType<"NavigationStackScreen">,
    routeName: "NavigationStackScreen" as const,
    title: "NavigationStack",
    presentationStyle: "modal" as const,
    headerShown: false,
  },
  [SwiftUINavigation.Sheet]: {
    component: SheetStackNavigator as ScreenComponentType<"SheetScreen">,
    routeName: "SheetScreen" as const,
    title: "Sheet",
    presentationStyle: "card" as const,
    headerShown: false,
  },
};

export const SwiftUINavigationUtils = {
  allCases(): SwiftUINavigation[] {
    return Object.values(SwiftUINavigation);
  },

  componentType(component: SwiftUINavigation) {
    return SwiftUINavigationMap[component].component;
  },

  screenName(component: SwiftUINavigation) {
    return SwiftUINavigationMap[component].routeName;
  },

  title(component: SwiftUINavigation) {
    return SwiftUINavigationMap[component].title;
  },

  presentationStyle(component: SwiftUINavigation) {
    return SwiftUINavigationMap[component].presentationStyle;
  },

  headerShown(component: SwiftUINavigation) {
    return SwiftUINavigationMap[component].headerShown;
  },
};