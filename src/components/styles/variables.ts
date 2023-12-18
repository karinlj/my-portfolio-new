import { DefaultTheme } from "styled-components";
// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    background_nav: string;
    background_inverse: string;
    btn_color: string;
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
  textcolor_dark: "#404040",
  text_gray: "#737373",
  //other
  lightgray: "#eee",
  navcolor: "#f7f4f1",
  bluecolor: "#2e9ce6",
  lilacPastel: "#DFB2F4",
  orange: "#F68C70",
  pink_light: "#f49097",
  pink_dark: "#f55c7a",
  // linkcolor: "#ff66b3",
  linkcolor: "#f49097",
};

export const lightTheme: DefaultTheme = {
  background: colors.background_light,
  background_nav: colors.background_darkgrey,
  background_inverse: colors.background_darkgrey,
  btn_color: colors.textcolor_dark,
  text: colors.textcolor_dark,
  text_inverse: colors.textcolor_light,
  border_color_inverse: colors.textcolor_dark,
};
export const grayTheme: DefaultTheme = {
  background: colors.background_darkgrey,
  background_nav: colors.background_darkgrey_darker,
  background_inverse: colors.textcolor_light,
  btn_color: colors.textcolor_light,
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
