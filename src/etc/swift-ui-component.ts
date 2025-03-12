import { ScreenComponentType } from "../etc/screen-component-type";
import TextScreen from "../screens/TextScreen";
import ButtonScreen from "../screens/ButtonScreen";

export enum SwiftUIComponent {
  Text = "text",
  Button = "button",
}

const SwiftUIComponentMap = {
  [SwiftUIComponent.Text]: {
    component: TextScreen as ScreenComponentType<"Text Screen">,
    routeName: "Text Screen" as const,
    title: "Text",
  },
  [SwiftUIComponent.Button]: {
    component: ButtonScreen as ScreenComponentType<"Button Screen">,
    routeName: "Button Screen" as const,
    title: "Button",
  },
};

export const SwiftUIComponentUtils = {
  allCases(): SwiftUIComponent[] {
    return Object.values(SwiftUIComponent);
  },

  componentType(component: SwiftUIComponent) {
    return SwiftUIComponentMap[component].component;
  },

  screenName(component: SwiftUIComponent) {
    return SwiftUIComponentMap[component].routeName;
  },

  title(component: SwiftUIComponent) {
    return SwiftUIComponentMap[component].title;
  },
};
