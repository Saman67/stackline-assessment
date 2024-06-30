import React from 'react';
import {SalesData} from "../../store/productSlice";
import DataTable from 'react-data-table-component';
import {DateTime} from 'luxon';
import numeral from 'numeral';


type ProductSalesTableProps = {
  salesData: SalesData[]
}
export function ProductSalesTable({salesData}: ProductSalesTableProps) {
  return (
    <div className='bg-white rounded-sm py-3 px-8'>
      <DataTable
        pagination
        columns={columns}
        data={salesData}
        customStyles={customStyles}
      />
    </div>
  );
}


const customStyles = {
  headCells: {
    style: {
      color: '#2c2c2c',
      fontWeight: '300',
      fontSize: '14px',
    },
  },
  cells: {
    style: {
      color: '#9296a4',
      fontWeight: '300',
    },
  },
};


const columns = [
  {
    name: 'WEEK ENDING',
    sortable: true,
    selector: (row: SalesData) => DateTime.fromString(row.weekEnding, 'yyyy-MM-dd').toFormat('MM-dd-yy'),
  },
  {
    name: 'RETAIL SALES',
    sortable: true,
    selector: (row: SalesData) => numeral(row.retailSales).format('$#,###'),
  },
  {
    name: 'WHOLESALE SALES',
    sortable: true,
    selector: (row: SalesData) => numeral(row.wholesaleSales).format('$#,###'),
  },
  {
    name: 'UNITS SOLD',
    sortable: true,
    selector: (row: SalesData) => numeral(row.unitsSold).format('#,###'),
  },
  {
    name: 'RETAILER MARGIN',
    sortable: true,
    selector: (row: SalesData) => numeral(row.retailerMargin).format('$#,###'),
  },
];
