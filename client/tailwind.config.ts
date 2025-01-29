import type { Config } from "tailwindcss";
// 0:22:45 - import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
// 0:22:45 - import { createThemes } from "tw-colors";
import colors from "tailwindcss/colors";
// 0:22:45 - import colors from "tailwindcss/colors";

// 0:22:45 - baseColors
const baseColors = [
   "gray",
   "red",
   "yellow",
   "blue",
   "indigo",
   "purple",
   "pink",
   "green",
   "orange",
   "teal",
   "cyan"
];

// 0:22:45 - shadeMapping
const shadeMapping = {
   "50": "900",
   "100": "800",
   "200": "700",
   "300": "600",
   "400": "500",
   "500": "400",
   "600": "300",
   "700": "200",
   "800": "100",
   "900": "50"
};

// 0:22:45 - generateThemeObject
const generateThemeObject = (color: any, mapping: any, invert: boolean) => {
   const theme: any = {};
   baseColors.forEach((color) => {
      theme[color] = {};
      Object.entries(mapping).forEach(([key, value]: any) => {
         const shadeKey = invert ? value : key;
         theme[color][key] = `colors[color][shadeKey]`;
      });
   });
   return theme;
};

// 0:22:45 - lightTheme
const lightTheme = generateThemeObject(colors, shadeMapping, false);

// 0:22:45 - darkTheme
const darkTheme = generateThemeObject(colors, shadeMapping, true);

// 0:22:45 - themes
const themes = {
   light: {
      ...lightTheme,
      white: "#fff"
   },
   dark: {
      ...darkTheme,
      white: colors.gray["950"],
      black: colors.gray["50"]
   }
};

export default {
   // 0:21:45 - darkMode: "class"
   darkMode: "class",
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
   ],
   theme: {
      extend: {
         colors: {
            background: "var(--background)",
            foreground: "var(--foreground)"
         }
      }
   },
   plugins: [
      // 0:20:45 - createThemes(themes)
      createThemes(themes)
   ]
} satisfies Config;
