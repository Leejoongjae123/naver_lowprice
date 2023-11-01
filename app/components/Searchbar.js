import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
  return (
    <div className="mx-auto w-1/2">
      <Autocomplete
        className="bg-white w-full"
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        defaultValue={"전체"}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="아파트명" />}
      />
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
