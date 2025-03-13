import { ScreenComponentType } from "../etc/screen-component-type";
import TextScreen from "../screens/TextScreen";
import ButtonScreen from "../screens/ButtonScreen";
import ImageScreen from "../screens/ImageScreen";
import VStackScreen from "../screens/VStackScreen";
import HStackScreen from "../screens/HStackScreen";
import ZStackScreen from "../screens/ZStackScreen";
import GridScreen from "../screens/GridScreen";
import ListScreen from "../screens/ListScreen";

export enum SwiftUIComponent {
  Text = "text",
  Button = "button",
  Image = "image",
  VStack = "vstack",
  HStack = "hstack",
  ZStack = "zstack",
  Grid = "Grid",
  List = "List",
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
  [SwiftUIComponent.HStack]: {
    component: HStackScreen as ScreenComponentType<"HStack Screen">,
    routeName: "HStack Screen" as const,
    title: "HStack",
  },
  [SwiftUIComponent.ZStack]: {
    component: ZStackScreen as ScreenComponentType<"ZStack Screen">,
    routeName: "ZStack Screen" as const,
    title: "ZStack",
  },
  [SwiftUIComponent.Grid]: {
    component: GridScreen as ScreenComponentType<"Grid Screen">,
    routeName: "Grid Screen" as const,
    title: "Grid",
  },
  [SwiftUIComponent.List]: {
    component: ListScreen as ScreenComponentType<"List Screen">,
    routeName: "List Screen" as const,
    title: "List",
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
