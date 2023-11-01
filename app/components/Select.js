"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState, useEffect } from "react";
export default function BasicSelect() {
  const [region, setRegion] = useState("전체");
  const [sortType, setSortType] = useState("가격내림차순");

  const handleChange1 = (event) => {
    setRegion(event.target.value);
  };
  const handleChange2 = (event) => {
    setSortType(event.target.value);
  };

  return (
    <div className="flex gap-x-2">
      <Box className="bg-white w-20">
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
      <Box className="bg-white w-20">
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
