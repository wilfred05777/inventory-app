# Build a Fullstack Inventory Management Dashboard

[![Tutorial Video](https://img.youtube.com/vi/ddKQ8sZo_v8/0.jpg)](https://www.youtube.com/watch?v=ddKQ8sZo_v8)

Link to related video: https://www.youtube.com/watch?v=ddKQ8sZo_v8

## Tutorial

This repository contains the code corresponding to an in-depth tutorial available on my YouTube channel. It is highly suggested to watch the [tutorial video](https://www.youtube.com/watch?v=ddKQ8sZo_v8) as it includes detailed instructions on how to set up everything, including deploying AWS. This tutorial is designed for both beginners and experts.

<!-- Join our [Discord community](https://discord.com/channels/1070200085440376872/1267499814678171698) for discussions about this specific app. -->

## Tech Stack

-  **Next JS**
-  **Tailwind**
-  **Redux Toolkit**
-  **Redux Toolkit Query**
-  **Material UI Data Grid**
-  **Node.js**
-  **Prisma**
-  **AWS EC2**
-  **AWS RDS**
-  **AWS API Gateway**
-  **AWS Amplify**
-  **AWS S3**

## Resources and Links

### Image Files

-  [Server assets to download](https://github.com/ed-roh/inventory-management/tree/master/server/assets)

### Configuration and Code

-  [tailwind.config.ts](https://github.com/ed-roh/inventory-management/blob/master/client/tailwind.config.ts) (to copy)
-  [Redux store file](https://github.com/ed-roh/inventory-management/blob/master/client/src/app/redux.tsx) (to copy)
-  [Seed files for database](https://github.com/ed-roh/inventory-management/blob/master/server/prisma/seed.ts) (to copy)
-  [Seed data files](https://github.com/ed-roh/inventory-management/tree/master/server/prisma/seedData) (to download)

### Additional Resources

-  [Data model diagram](https://drawsql.app/teams/team-3023/diagrams/56-inventorymanagement)
-  [Prisma schema file](https://github.com/ed-roh/inventory-management/blob/master/server/prisma/schema.prisma)
-  [AWS commands](https://github.com/ed-roh/inventory-management/blob/master/server/aws-ec2-instructions.md)

# Client folder

-  npm i @mui/x-data-grid @mui/material @emotion/react @emotion/styled lucide-react numeral recharts uuid axios
-  npm i -D @types/node @types/uuid @types/numeral
-  npm i -D tw-colors

-- tailwind.config.ts

```
0:19:45 - tailwind.config.ts
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


```

# Encountered Issues & Solutions

## VS Code Extensions

-  Tailwind CSS IntelliSense - Tailwind Labs
-  Tailwind Documentation - alfredbirk \*\*optional
-  Prettier

## package.json issues

-  npm i <package-name>@<version>

## github repository

### - Unclickable folder in Repo on GitHub (Arrow on folder)

-  [Unclickable folder in Repo on GitHub (Arrow on folder)](https://medium.com/@hassaanistic/unclickable-folder-in-repo-on-github-arrow-on-folder-b8fa21b13858#:~:text=When%20you%20are%20pushing%20your,a%20new%20repository%20on%20GitHub)
-  \*note: effective solution
