import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../store';
import {fetchProductData} from '../store/productSlice';
import {ProductSidebar} from "./productSidebar";
import {ProductSalesChart} from "./product/productSalesChart";
import {ProductSalesTable} from "./product/productSalesTable";

export function ProductView() {
  const dispatch = useDispatch<AppDispatch>();

  const {data: productData, status} = useSelector((state: RootState) => state.product);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProductData());
    }
  }, [status, dispatch]);

  if(!productData?.length)
    return null;

  const product = productData[0];

  return (
    <div className='flex gap-4 p-4 pt-20' style={{backgroundColor: '#F6F8FA'}}>
      <div className='w-full max-w-[380px] bg-white rounded-sm p-8'>
        <ProductSidebar product={product} />
      </div>
      <main className='w-full'>
        <ProductSalesChart salesData={product.sales} />
        <div className='mt-16' />
        <ProductSalesTable salesData={product.sales} />
      </main>
    </div>
  )
}
