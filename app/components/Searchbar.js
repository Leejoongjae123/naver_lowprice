'use client'
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
export default function ComboBox() {
  const [region, setRegion] = useState("전체");
  const [sortType, setSortType] = useState("가격내림차순");

  const handleChange1 = (event) => {
    setRegion(event.target.value);
  };
  const handleChange2 = (event) => {
    setSortType(event.target.value);
  };
  return (
    <div className="flex-col mx-auto w-1/3 gap-x-3 justify-center">
      <Box className="bg-white w-full my-3">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">지역</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={region}
            label="지역"
            onChange={handleChange1}
            defaultValue={"전체"}
          >
            <MenuItem value="전체">전체</MenuItem>
            <MenuItem value="판교">판교</MenuItem>
            <MenuItem value="광교">광교</MenuItem>
            <MenuItem value="동탄">동탄</MenuItem>
          </Select>
        </FormControl>
      </Box>
      
      <Autocomplete
        className="bg-white w-full my-3"
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        defaultValue={"전체"}
        renderInput={(params) => <TextField {...params} label="아파트명" />}
      />
      
      <Box className="bg-white w-full my-3">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">정렬</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortType}
            label="정렬"
            onChange={handleChange2}
            defaultValue={"가격내림차순"}
          >
            <MenuItem value="가격내림차순">가격내림차순</MenuItem>
            <MenuItem value="가격오름차순">가격오름차순</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "전체" },
  { label: "광교 자연앤힐스" },
  { label: "광교 이편한세상" },
  { label: "광교 써밋플레이스" },
];
