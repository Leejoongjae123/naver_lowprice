import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function AccessibleTable() {
  return (
    <div className="px-10">
      <div className="relative overflow-x-auto shadow-md rounded-2xl">
        <table className="truncate text-sm table-fixed w-full text-gray-500 shadow-xl">
          <thead className="text-center text-xs md:text-base text-gray-700 uppercase bg-gray-50 font-bold">
            <tr>
              <th scope="col" className="px-6 py-3">
                아파트명
                
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="">
                  평형
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="">
                  호가
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="">
                  실거래가
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-xs text-center">
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="text-center px-2 py-4 font-medium text-gray-900  whitespace-normal"
              >
                판교 푸르지오그랑블
              </th>
              <td className=" py-4">38평형</td>
              <td className=" py-4">22</td>
              <td className=" py-4">24</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="text-center px-2 py-4 font-medium text-gray-900  whitespace-normal"
              >
                판교 푸르지오그랑블
              </th>
              <td className=" py-4">38평형</td>
              <td className=" py-4">22</td>
              <td className=" py-4">24</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="text-center px-2 py-4 font-medium text-gray-900  whitespace-normal"
              >
                판교 푸르지오그랑블
              </th>
              <td className=" py-4">38평형</td>
              <td className=" py-4">22</td>
              <td className=" py-4">24</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
