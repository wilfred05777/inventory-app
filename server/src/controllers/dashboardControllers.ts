import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDashboardMetrics = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      // diri ang API call ug pag pull sa mga model different table
      const popularProducts = await prisma.products.findMany({
         take: 15, // number to show of data sa products
         orderBy: {
            stockQuantity: "desc", // in descending order to show
         },
      });

      const salesSummary = await prisma.salesSummary.findMany({
         take: 15,
         orderBy: {
            date: "desc",
         },
      });

      const purchaseSummary = await prisma.purchaseSummary.findMany({
         take: 5,
         orderBy: {
            date: "desc",
         },
      });
      const expenseSummary = await prisma.expenseSummary.findMany({
         take: 5,
         orderBy: {
            date: "desc",
         },
      });

      // 1st Decleration of transformation of data from the backend diri tong changes customization on a specific output na gusto nimo buhaton sa data gikan sa backend. below:
      const expenseByCategorySummaryRaw =
         await prisma.expenseByCategory.findMany({
            take: 5,
            orderBy: {
               date: "desc",
            },
         });
      // 2nd transformation of data from the backend customize output below:
      const expenseByCategory = expenseByCategorySummaryRaw.map((item) => ({
         ...item,
         amount: item.amount.toString(),
      }));

      res.json({
         popularProducts,
         salesSummary,
         purchaseSummary,
         expenseSummary,
         expenseByCategory,
      });
   } catch (error) {
      res.status(500).json({ message: "Error retrieving dashboard metrics" });
   }
};
