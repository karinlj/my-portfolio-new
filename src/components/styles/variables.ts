import { DefaultTheme } from "styled-components";
// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    background_darker: string;
    background_inverse: string;
    btn_color: string;
    btn_background: string;
    text: string;
    text_inverse: string;
    border_color_inverse: string;
  }
}

export const colors = {
  //bg
  background_darkgrey: "#1a1a1a",
  background_darkgrey_darker: "#0d0d0d",
  background_light: "#f9f9f9", //"#f7f4f1",
  //text
  textcolor_light: "#f9f9f9",
  textcolor_dark: "#404159",
  text_gray: "#737373",
  //other
  lightgray: "#eee",
  navcolor: "#f7f4f1",
  linkcolor: "#ff66b3",
  bluecolor: "#2e9ce6",
};

export const lightTheme: DefaultTheme = {
  background: colors.background_light,
  background_darker: colors.background_darkgrey,
  background_inverse: colors.background_darkgrey,
  btn_color: colors.textcolor_dark,
  btn_background: "#ede5de",
  text: colors.textcolor_dark,
  text_inverse: colors.textcolor_light,
  border_color_inverse: "#404040",
};
export const grayTheme: DefaultTheme = {
  background: colors.background_darkgrey,
  background_darker: colors.background_darkgrey_darker,
  background_inverse: colors.textcolor_light,
  btn_color: colors.textcolor_light,
  btn_background: "#333",
  text: colors.textcolor_light,
  text_inverse: colors.textcolor_dark,
  border_color_inverse: "#e6e6e6",
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
