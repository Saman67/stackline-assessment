import React from 'react';
import {ProductData} from "../store/productSlice";


type ProductSidebarProps = {
  product: ProductData
}
export function ProductSidebar({product}: ProductSidebarProps) {
  return (
    <div>
      <img src={product.image} alt={product.title}
           className="w-full max-w-[170px] m-auto mb-4"
      />

      <h2 className="font-bold text-xl text-bold text-center mb-2">{product.title}</h2>

      <p className='text-sm text-gray-400 text-center max-w-60 m-auto'>
        {product.subtitle}
      </p>

      <div className='flex flex-wrap border-y mt-4 py-4 gap-2'>
        {
          product.tags.map((tag, i) => (
            <b key={i} className='py-1 px-5 font-normal text-sm text-slate-600 rounded border border-slate-200'>{tag}</b>
          ))
        }
      </div>
    </div>
  );
}
