import { ScreenComponentType } from "../etc/screen-component-type";
import TextScreen from "../screens/TextScreen";
import ButtonScreen from "../screens/ButtonScreen";
import ImageScreen from "../screens/ImageScreen";
import VStackScreen from "../screens/VStackScreen";

export enum SwiftUIComponent {
  Text = "text",
  Button = "button",
  Image = "image",
  VStack = "vstack",
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
  [SwiftUIComponent.Image]: {
    component: ImageScreen as ScreenComponentType<"Image Screen">,
    routeName: "Image Screen" as const,
    title: "Image",
  },
  [SwiftUIComponent.VStack]: {
    component: VStackScreen as ScreenComponentType<"VStack Screen">,
    routeName: "VStack Screen" as const,
    title: "VStack",
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
