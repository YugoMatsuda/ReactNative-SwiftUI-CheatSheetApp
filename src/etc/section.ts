enum Section {
  Components = "Components",
  Navigation = "Navigation",
}

namespace Section {
  export function title(section: Section): string {
    switch (section) {
      case Section.Components:
        return "Components";
      case Section.Navigation:
        return "Navigation";
    }
  }

  export function allCases(): Section[] {
    return Object.values(Section) as Section[];
  }
}



export { Section };
