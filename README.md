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
-  npm i react-redux @reduxjs/toolkit dotenv
-  npm i redux-persist - 0:53:00

-- tailwind.config.ts

```
0:19:45 - tailwind.config.ts

```

# Encountered Issues & Solutions

## VS Code Extensions

-  Tailwind CSS IntelliSense - Tailwind Labs
-  Tailwind Documentation - alfredbirk \*\*optional
-  Prettier
-  ES7 + React/Redux/React-Native snippets - dsznajder
-  Inline fold for Tailwind css too much tag on a class

## package.json issues

-  npm i <package-name>@<version>

## github repository

### - Unclickable folder in Repo on GitHub (Arrow on folder)

`Jan. 20, 2025 - Thursday`

-  [Unclickable folder in Repo on GitHub (Arrow on folder)](https://medium.com/@hassaanistic/unclickable-folder-in-repo-on-github-arrow-on-folder-b8fa21b13858#:~:text=When%20you%20are%20pushing%20your,a%20new%20repository%20on%20GitHub)
-  \*note: effective solution

-

### - In Tailwind CSS styling - self struggle issues

`Jan. 31, 2025 - Friday`

-  struggling how they come together
-  note: you need to expose yourself regularly on daily basis understanding concepts of HTML and CSS.

` Feb. 3, 2025 - Mondy`
-- Tailwind learning: about adding a left side margin on medium screen

-- To add left side spacing specifically for medium screens (md) in Tailwind CSS, use the class md:ml-<number> where <number> represents the desired spacing value from Tailwind's spacing scale; for example, md:ml-4 would add a medium left margin only when the screen size is medium and above.

### Database tools

-- https://drawsql.app/diagrams
