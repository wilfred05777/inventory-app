"use client";

import { useGetUsersQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
   { field: "userId", headerName: "ID", width: 90 },
   { field: "name", headerName: " Name", width: 200 },
   { field: "email", headerName: "Email Name", width: 200 },
];

const Users = () => {
   // const { data: products, isError, isLoading } = useGetProductsQuery;
   const { data: users, isError, isLoading } = useGetUsersQuery();
   // console.log("users", users);
   // console.log("isError", isError);
   // console.log("isLoading", isLoading);

   if (isLoading) {
      return <div className='py-4'>Loading...</div>;
   }

   if (isError || !users) {
      return (
         <div className='text-center text-red-50 py-4'>
            Failed to fetch users. Please try again later.
         </div>
      );
   }
   console.log("users", users);

   return (
      <div className='flex flex-col'>
         <Header name='Users' />
         <DataGrid
            rows={users}
            columns={columns}
            getRowId={(row) => row.userId}
            checkboxSelection
            className='bg-white shadow rounded-lg border-gray-200 mt-5 !text-gray-700'
         />
      </div>
   );
};

export default Users;
