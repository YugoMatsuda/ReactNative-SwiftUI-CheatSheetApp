import { ScreenComponentType } from "../etc/screen-component-type";
import NavigationStackNavigator from "../screens/NavigationStackScreen";

enum SwiftUINavigation {
  NavigationStack = "navigationstack"
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