export const globalTypes = {
  size: {
    description: "rem 사이즈 지정",
    defaultValue: "62.5%",
    toolbar: {
      title: "size",
      icon: "ruler",
      items: ["50%", "62.5%", "75%"],
      dynamicTitle: true,
    },
  },
  themeColor: {
    description: "전체 테마 색상 지정",
    defaultValue: "green",
    toolbar: {
      title: "themecolor",
      icon: "paintbrush",
      items: ["green", "blue", "violet"],
      dynamicTitle: true,
    },
  },
  darkmode: {
    description: "다크모드 여부 지정",
    defaultValue: "light",
    toolbar: {
      title: "darkmode",
      icon: "circlehollow",
      items: [
        { value: "light", icon: "sun", title: "light" },
        { value: "dark", icon: "moon", title: "dark" },
      ],
      dynamicTitle: true,
    },
  },
};
