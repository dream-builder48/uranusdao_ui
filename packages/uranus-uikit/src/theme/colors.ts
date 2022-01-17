import { Colors } from "./types";

export const baseColors = {
  failure: "#D06969",
  primary: "#46A1C2",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "rgba(40, 86, 182, 1)",
  success: "#58BD95",
  warning: "#FFB237",
  black: "#000000",
  darkBlue: "#2C3851",
  blue: "#2856B6",
  alphaBlue: "rgba(40, 86, 182, 0.1)",
  lightBlue: "#F0F5F9",
  white: "#FFFFFF",
  darkGrey: "#60605F",
  grey: "#BABAB9",
  beige: "#EEEEE7",
  lightBeige: "#F4F5F1",
  grayCF: "#CFCFCF",
  darkPurple: "#0E0037",
  lightAqua: "#F0F8F9",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#000000",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FAF9FA",
  backgroundDisabled: "rgba(70, 161, 194, 0.5)",
  backgroundAlt: "#FFFFFF",
  backgroundAlt2: "rgba(255, 255, 255, 0.7)",
  cardBorder: "#E7E3EB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  extraBackground: "#E2E0DB",
  input: "#F0F8F9",
  inputSecondary: "#000000",
  menuSubtle: "rgba(44, 56, 81, 1)",
  tertiary: "rgba(255, 255, 255, 1)",
  text: "#000000",
  textDisabled: "#FFFFFF",
  textSubtle: "#60605F",
  disabled: "rgba(70, 161, 194, 0.5)",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(89.96deg, #AFCDE0 0.03%, #DABF7B 99.83%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    greenYellow: "linear-gradient(180deg, #4799CC 100%, #FFD600 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#9A6AFF",
  background: "#08060B",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  backgroundAlt2: "rgba(39, 38, 44, 0.7)",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  extraBackground: "#E2E0DB",
  input: "#372F47",
  inputSecondary: "#262130",
  menuSubtle: "#B8ADD2",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#F4EEFF",
  textDisabled: "#666171",
  textSubtle: "#B8ADD2",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    greenYellow: "linear-gradient(90deg, #4799CC 100%, #FFD600 100%)",
  },
};
