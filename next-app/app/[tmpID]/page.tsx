"use client";

import { Typography } from "@mui/material";
interface Props {
  params: {
    tmpID: any;
  };
}
export default function Page({ params }: Props) {
  console.log(params.tmpID);
  return (
    <main>
      <Typography variant={"h3"}>{params.tmpID}</Typography>
    </main>
  );
}
