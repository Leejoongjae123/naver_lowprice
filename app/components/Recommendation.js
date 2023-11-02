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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                아파트명
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  평형
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  호가
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  실거래가
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                판교 푸르지오그랑블
              </th>
              <td className="px-6 py-4">38평형</td>
              <td className="px-6 py-4">22</td>
              <td className="px-6 py-4">24</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                판교 푸르지오그랑블
              </th>
              <td className="px-6 py-4">38평형</td>
              <td className="px-6 py-4">22</td>
              <td className="px-6 py-4">24</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                판교 푸르지오그랑블
              </th>
              <td className="px-6 py-4">38평형</td>
              <td className="px-6 py-4">22</td>
              <td className="px-6 py-4">24</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
