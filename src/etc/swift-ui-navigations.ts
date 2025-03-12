enum SwiftUINavigation {
  NavigationStack = "navigationstack",
  NavigationView = "navigationview",
}
export { SwiftUINavigation };

export const SwiftUINavigationUtils = {
  allCases(): SwiftUINavigation[] {
    return Object.values(SwiftUINavigation);
  },
  title(component: SwiftUINavigation): string {
    switch (component) {
      case SwiftUINavigation.NavigationStack:
        return "NavigationStack";
      case SwiftUINavigation.NavigationView:
        return "NavigationView";
    }
  },
  screenName(component: SwiftUINavigation): string {
    switch (component) {
      case SwiftUINavigation.NavigationStack:
        return "NavigationStack Screen";
      case SwiftUINavigation.NavigationView:
        return "NavigationView Screen";
    }
  },
};
