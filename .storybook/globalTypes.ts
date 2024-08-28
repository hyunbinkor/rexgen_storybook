export const globalTypes = {
  size: {
    name: "사이즈",
    description: "rem 사이즈 지정",
    defaultValue: "62.5%",
    toolbar: {
      icon: "ruler",
      items: ["50%", "62.5%", "75%"],
    },
  },
  color: {
    name: "색상",
    description: "전체 테마 색상 지정",
    defaultValue: "green",
    toolbar: {
      icon: "paintbrush",
      items: ["green", "blue", "violet"],
    },
  },
  darkmode: {
    name: "다크모드",
    description: "다크모드 여부 지정",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", icon: "sun", title: "light" },
        { value: "dark", icon: "moon", title: "dark" },
      ],
    },
  },
};
