import { DefaultTheme } from "styled-components";

export const colors = {
  //bg
  background_darkgrey: "#1a1a1a",
  background_darkgrey_darker: "#0d0d0d",
  //text
  textcolor_light: "#f7f4f1",
  textcolor_dark: "#404159",
  text_gray: "#737373",
  //other
  lightgray: "#eee",
  navcolor: "#fff",
  linkcolor: "#ff66b3",
  bluecolor: "#2e9ce6",
};

export const greenTheme: DefaultTheme = {
  background: "#161d16",
  background_darker: "#0b0f0b",
  btn_background: "#808080",
  text: colors.textcolor_light,
};
export const grayTheme: DefaultTheme = {
  background: colors.background_darkgrey,
  background_darker: colors.background_darkgrey_darker,
  btn_background: "#3e8e3e",
  text: colors.textcolor_light,
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
