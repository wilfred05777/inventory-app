import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
   productId: string;
   name: string;
   price: number;
   rating?: number;
   stockQuantity: number;
}

export interface SalesSummary {
   salesSummaryId: string;
   totalValue: number;
   changePercentage?: number;
   date: string;
}

export interface PurchaseSummary {
   purchaseSummaryId: string;
   totalPurchased: number;
   changePercentage?: number;
   date: string;
}

export interface ExpenseSummary {
   expenseSummaryId: string;
   totalExpenses: number;
   date: number;
}
export interface ExpenseByCategorySummary {
   expenseByCategorySummaryId: string;
   category: string;
   amount: string;
   date: string;
}

export interface DashboardMetrics {
   popularProducts: Product[];
   salesSummery: SalesSummary[];
   purchaseSummary: PurchaseSummary[];
   expenseSummary: ExpenseSummary[];
   expenseByCategorySummary: ExpenseByCategorySummary[];
}

// 1. Define proper response types
export interface ApiResponse<T> {
   data?: T;
   error?: {
      message: string;
      code: number;
   };
   timestamp: string;
}

// 2. Add base query with error handling
const baseQuery = fetchBaseQuery({
   baseUrl: process.env.NEXT_PUBLIC_API_URL,
   prepareHeaders: (headers) => {
      // Add auth headers if needed
      const token = localStorage.getItem("token");
      if (token) {
         headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
   },
});

export const api = createApi({
   reducerPath: "api",
   baseQuery: fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_API_URL,
      // Add response handler for consistent error structure
      validateStatus: (response) => response.status < 500,
   }),
   tagTypes: ["DashboardMetrics"],
   endpoints: (build) => ({
      getDashboardMetrics: build.query<DashboardMetrics, void>({
         query: () => "/dashboard",
         // Fixed transformResponse with proper typing
         transformResponse: (
            rawResponse: ApiResponse<DashboardMetrics>
         ): DashboardMetrics => {
            if (!rawResponse.data) {
               throw new Error("Server returned empty response");
            }

            if (rawResponse.error) {
               throw new Error(
                  `API Error ${rawResponse.error.code}: ${rawResponse.error.message}`
               );
            }

            // Map BigInt values if needed
            const transformedData = {
               ...rawResponse.data,
               expenseByCategorySummary:
                  rawResponse.data.expenseByCategorySummary?.map((item) => ({
                     ...item,
                     amount: item.amount.toString(),
                  })) || [],
            };

            return transformedData;
         },
         providesTags: ["DashboardMetrics"],
      }),
   }),

   // reducerPath: "api",
   // baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
   // tagTypes: ["DashboardMetrics"],
   // endpoints: (build) => ({
   //    getDashboardMetrics: build.query<DashboardMetrics, void>({
   //       query: () => "/dashboard",
   //       providesTags: ["DashboardMetrics"],
   //    }),
   // }),
});

export const { useGetDashboardMetricsQuery } = api;
