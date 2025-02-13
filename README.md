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
-  Prisma by prisma - for .prisma file extension

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

-- https://drawsql.app/diagrams - e.g https://drawsql.app/teams/team-3023/diagrams/56-inventorymanagement
-- Data Model
-- table schema explained
-- and for performing data analysis separate or run a once in a while / week separte aggration

### PostgreSQL encountered ISSUE / Problem and Solution

-- postgresql Unable to connect to server: connection failed::1), Port 5432 failed: fe_sendauth: no password supplied
-- resolved note\*\*: resolve the issue by uninstalling and installing new installation and the version should be Interactive installer by EDB https://www.postgresql.org/download/windows/

-- possible solution is to search and test first
-- do more research about postresql cannot create new server issue - on my end
-- second idea is to reinstall postgress as I forget the master password of it.

# Server folder

-  `create server folder in the root directory -> mkdir server then cd server`
-  `npm init -y `
-  `npm i prisma @prisma/client`
-  `npx prisma init`
-  `cd prisma folder in server folder`
-  `add assets for the server folder`

-  `cd server`
-  `npm install typescript --save-dev`
-  `npx tsc --init`
-  `npm i -D ts-node typescript @types/node`

-  `tsconfig.json file at server folder`
-  `find "module": "commonjs" change to "module":"nodenext `
-  `"moduleResolution": "nodenext"`
-  `"resolveJsonModule": true`
-  `update "outDir": "./", to "outDir": "./dist",`

-  `after creating all the model for each table in the database at prisma`
-  `adjust package.json file at server ` - `"scripts":{ "seed": "ts-node prisma/seed.ts"}`

-  `.env file ` - `# // example - postgresql://USER:PASSWORD@HOST:PORT/DATABASE
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/inventorymanagement?schema=public"`

##### Db-script-01

-  ```
   // 01:55:25
   // .env for server in prisma
   // example - postgresql://username:password@localhost:5432/database_name
   DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/inventorymanagement?schema=public"

   ```

-  `npx prisma generate`
-  `npx prisma migrate dev --name init`
-  `npm run seed`

##### Encounter Issue on Seeding to database

-  check the postgreSQL table if there is an existing tables it means records are already in there
-  `` PrismaClientKnownRequestError: Invalid `model.deleteMany()` invocation in `` - delete the tables and redo again `Db-script-01`

#### Connect the API

`server / terminal`

-  `npm i express body-parser cors dotenv helmet morgan concurrently rimraf`
-  `npm i -D nodemon @types/cors @types/express @types/node @types/morgan`

-  package.json file update below code:

   ```
   "scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "seed": "ts-node prisma/seed.ts",
   "build": "rimraf dist && npx tsc",
   "start": "npm run build && node dist/index.js",
   "dev": "npm run build && concurrently \"npx tsc -w\" \"nodemon --exec ts-node src/index.ts\""
   },
   ```

-  server folder then `npm run dev`

-  testing route via gitbash CLI: `curl http://localhost:8000/hello`

###### Creating a Controller and Routes

-  folder: server / src/ controller / DashBoardController.ts 2:08:25 - 2:14:18
   -  `API calls diri ang data models gina pull and customize the data transformation accordingly to specifics it depends sa programmer or requirements sa clients.`
-  folder: server/src/ routes / dashboardRoutes.ts 2:14:15 - 2:16:50
   -  files to be created and modified
      `server/src/index.ts`
      `server/src/routes/dashboardRoutes.ts `
-  Testing the routes
   -  gitbash terminal: `curl http://localhost:8000/dashboard`
   -  Thunder Client: - `get:http://localhost:8000/dashboard` - `body` - `json format`
-  next

##### FRONTEND ISSUE AND SOLUTION

-  `Feb. 6, 2025 encounter issue`
-  `postgres - cannot show and display data on my end : 2:41:48`

   -  `npm install pg`
   -  `npm install @prisma/adapter-pg`
   -  `https://www.prisma.io/docs/orm/overview/databases/postgresql`
      -  `just tested the server: http://localhost:8000/dashboard it displays the database:inventorymanagement @ postgreSQL on my desktop time check 1:52PM - feb-6-2025 `
      -  `so possible error is at the client side which i am going to trace now.`
   -  `encounter some issues on nvm on desktop pc its always 19.9.0 https://stackoverflow.com/questions/20711240/how-to-completely-remove-node-js-from-windows`

-  `Feb. 7, 2025 friday `

   -  `not yet resolved and even ask for deepseek`
   -  `read more about RTK - react tool kit`
   -  `https://dev.to/codexam/learn-rtk-query-in-nextjs-in-5-minutes-2nb7`

   ####

   -  resolve the issue with finally figure out where point of issue are:

   -  ```
      //client/src/state/api.ts
      baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }), // <-- wala na map ang environmental variable ('NEXT_PUBLIC_API_URL') properly mao wala na invoke ang mga data.

      //client/src/.env.local
      NEXT_PUBLIC_API_URL = http://localhost:8000 // <-- kani ang wala
      NEXT_PUBLIC_API_BASE_URL = "http://localhost:8000"
      ```

-  Error On Rating component

   -  `error  on CardPopularProducts.tsx on Rating Component 2:46:54`
   -  `app/(components)/Rating/index.tsx @ return [1, 2, 3, 4, 5].map((index) => {} <--- mali ()<--- tama`

-  `Feb. 8, 2025 3:10Am - 5:21am`

   -  `2:47:10 <- explaining starts-> @3:01:03 - 3:23:25 <-end - CardSalesSummary`
   -  `at this current version of nextjs v15.1.6 always add "use client" at the top of the file hoping they will fixed this in the next version`
   -  `rechart and read the documentation https://recharts.org/en-US/examples and explore examples from there`
   -  `computations for date need nako ma rewatch ni 3:01:03 - 3:23:25 `
   -  `confuse ko sa recharts how it works `

   ######

-  `Feb. 8, 2025 - 12:22PM`

   -  `encounter error here at CardExpenseSummary.tsx className='flex items-center'`

      ```
      {/* LABELS */}
      <ul className='flex flex-col justify-around items-center xl:items-start py-5 gap-3'>
         {expenseCategories.map((entry, index) => (
            <li
               key={`legend-${index}`}
               className='flex items-center' //<--- para mag display ang circle legend i forget to set the className for tailwind
            >
               <span
                  className='mr-2 w-3 h-3 rounded-full'
                  style={{
                     backgroundColor: colors[index % colors.length],
                  }}
               ></span>
               {entry.name}
            </li>
         ))}
      </ul>
      ```

######

-  `CardPurchaseSummary creation - 2:47:38 - 3:00:16  client/src/dashboard/CardPurchasedSummary.tsx`

   -  `fixing the <AreaChart> bug display => <ResponsiveContainer height={200} className="p-2"></...> 3:42:08`

######

-  `February 9, 2025 - Sunday`

   -  `3:43:02 - 3:57:15 - StatCard.tsx`
   -  `Mock static data @ client/src/app/dashboard/index.tsx - forget what is it called basta need to review it in react or reusable styling`
   -  `its always good to start at the server if you have the data format setup up and running you can always atleast how the data will be display output on the frontend/client - 3:58:01`

-  `Next-> 3:58:12-ProductController creation starts here server/src/controllers/productController.ts `

#### Creating Product

##### Server creation

-  `server/src/controllers/productController.ts `
-  `server/src/routes/productRoutes.ts`
-  `server/src/index.ts`
-  `gitbash -> server -> curl http://localhost:8000/products`
-  `3:58:06 - 4:04:42 server/src - products initial commit`

##### Client/FE creation

-  `connect to the FE go to client/src/state/api.ts`
   -  `4:05:37 - 4:10:44 FE and API endpoints connection`
-  `4:10:51- Invetory Page `
   -  `client/src/app/inventory/`
   -  `4:10:51-4:13:14 -  Invetory Page network inventory not showing data from db in preview`

###### `Solution: at inventory bug is that no () - 02-14-25: 2:22AM`

-  ` // const { data: products, isError, isLoading } = useGetProductsQuery; <- wrong`
-  `const { data: products, isError, isLoading } = useGetProductsQuery() <-right;`
