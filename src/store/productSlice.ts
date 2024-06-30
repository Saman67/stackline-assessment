import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getProduct} from "../service/product";

export interface ReviewData {
  customer: string,
    review: string,
  score: number,
}
export interface SalesData {
  weekEnding: string,
  retailSales: number,
  wholesaleSales: number,
  unitsSold: number,
  retailerMargin: number,
}
export interface ProductData {
  id: string,
  title: string,
  image: string,
  subtitle: string,
  brand: string,
  retailer: string,
  details: string[],
  tags: string[],
  sales: SalesData[],
  reviews: ReviewData[],
}

interface DataState {
  data?: ProductData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DataState = {
  data: undefined,
  status: 'idle',
  error: null,
};

export const fetchProductData = createAsyncThunk('data/fetchData', getProduct);

export const productSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});
