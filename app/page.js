"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Articles from "./components/Articles";
import { useState, useEffect } from "react";
import Select from "./components/Select";
import Searchbar from "./components/Searchbar";
import Recommendation from './components/Recommendation'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const [articleList, setArticleList] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);
  return (
    <div>
      <div>
        <h1 className="font-bold text-4xl text-center py-10">추천 급매물 리스트</h1>
        <Recommendation></Recommendation>
      </div>
      <h1 className="font-bold text-4xl text-center py-10">급매물 검색</h1>
      <div className="flex py-10 justify-center gap-x-3">
        
        <div>
          <Searchbar></Searchbar>
        </div>
      </div>
      <div className="flex flex-col p-10">
        <div className="flex py-5 justify-end px-10">
          <Select></Select>
        </div>
        <div>
          <Grid container rowSpacing={3} columnSpacing={1}>
            {articleList.map((elem, index) => {
              return (
                <Grid item xs={6} md={3}>
                  <Articles></Articles>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
      <div className="pb-10 flex justify-center">
        <Stack className="" spacing={2}>
          <Pagination count={10} color="primary" />
        </Stack>
      </div>
    </div>
  );
}
