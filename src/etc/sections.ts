import { Section } from "./section";
import { SwiftUIComponent, SwiftUIComponentUtils } from "./swift-ui-component";
import {
  SwiftUINavigation,
  SwiftUINavigationUtils,
} from "./swift-ui-navigations";

export type SectionItem = {
  key: SwiftUIComponent | SwiftUINavigation;
  title: string;
};

export type SectionData = {
  title: string;
  data: SectionItem[];
};

export const sections: SectionData[] = [
  {
    title: Section.title(Section.Components),
    data: SwiftUIComponentUtils.allCases().map((item: SwiftUIComponent) => ({
      key: item,
      title: SwiftUIComponentUtils.title(item),
    })),
  },
  {
    title: Section.title(Section.Navigation),
    data: SwiftUINavigationUtils.allCases().map((item: SwiftUINavigation) => ({
      key: item,
      title: SwiftUINavigationUtils.title(item),
    })),
  },
];
