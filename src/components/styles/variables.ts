import { DefaultTheme } from "styled-components";

export const greenTheme: DefaultTheme = {
  background: "#161d16",
  background_darker: "#0b0f0b",
  btn_background: "#808080",
  text: "#f7f4f1",
};
export const grayTheme: DefaultTheme = {
  background: "#1a1a1a",
  background_darker: "#0d0d0d",
  btn_background: "#46a046",
  text: "#f7f4f1",
};

export const colors = {
  background_darkgrey: "#1a1a1a",
  background_darkgrey_darker: "#0d0d0d",
  textcolor: "#404159",
  themeLightHeadingcolor: "#f7f4f1",
  themeHeadingcolor_dark: "rgba(43, 44, 59, 0.9)",
  text_gray: "#737373",
  text_color_dark: "#212529",
  lightgray: "#eee",
  navcolor: "#fff",
  linkcolor: "#ff66b3",
  bluecolor: "#2e9ce6",
};

const size = {
  mobileXS: "480px",
  mobileS: "576px",
  mobileM: "768px",
  laptop: "992px",
  laptopL: "1200px",
  desktop: "1400px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const themeSettings = {
  themeBorder_radius: "8px",
  $themeBox_shadow:
    "0 7px 34px 0 rgba(0, 0, 0, 0.07), 0 11px 34px 0 rgba(0, 0, 0, 0.04)",
  $themefont: "Roboto, Helvetica, sans-serif",
};
