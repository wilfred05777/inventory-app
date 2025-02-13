"use client";

import { useGetProductsQuery } from "@/state/api";
import { PlusIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import Header from "@/app/(components)/Header";
import Rating from "@/app/(components)/Rating";

const Products = () => {
   const [searchTerm, setSearchTerm] = useState("");
   const [isModalOpen, setModalOpen] = useState(false);

   // grab data from products
   const {
      data: products,
      isLoading,
      isError,
   } = useGetProductsQuery(searchTerm);

   if (isLoading) {
      return <div className='py-4'>Loading...</div>;
   }

   if (isError) {
      return (
         <div className='text-center text-red-500 py-4'>
            Failed to fetch products
         </div>
      );
   }

   return (
      <div className='mx-auto pb-5 w-full'>
         {/* SEARCH BAR */}
         <div className='mb-6'>
            <div className='flex items-center border-2 border-gray-200 rounded'>
               <SearchIcon className='h-5 w-5 text-gray-50 m-2' />
               <input
                  className='w-full py-2 px-4'
                  type='text'
                  placeholder='Search products...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
               />
            </div>
         </div>

         {/* HEADER BAR */}
         <div className='flex justify-between items-center mb-6'>
            <Header name='Products' />
            <button
               className='flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded'
               onClick={() => setModalOpen(true)}
            >
               <PlusIcon className='h-5 w-5 mr-2 !text-gray-200' />
               Create Product
            </button>
         </div>

         {/* BODY PRODUCTS LIST */}
         <div className='grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 gap-10 justify-between'>
            {isLoading ? (
               <div>Loading...</div>
            ) : (
               products?.map((product) => (
                  <div
                     key={product.productId}
                     className='border shadow rounded-md p-4 max-w-full w-full mx-auto '
                  >
                     <div className='flex flex-col items-center'>
                        img{" "}
                        <h3 className='text-lg text-gray-900 font-semibold'>
                           {product.name}
                        </h3>
                        <p className='text-gray-800'>
                           ${product.price.toFixed(2)}
                        </p>
                        <div className='text-sm text-gray-600 mt-1'>
                           Stock: {product.stockQuantity}
                        </div>
                        {product.rating && (
                           <div className='flex item-center mt-2'>
                              <Rating rating={product.rating} />
                           </div>
                        )}
                     </div>
                  </div>
               ))
            )}
         </div>
      </div>
   );
};

export default Products;
