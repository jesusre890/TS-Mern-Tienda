import React from "react";
import { Alert } from "@material-tailwind/react";

export default function MessageBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Alert color="red" className=" flex justify-center pl-14 text-center max-w-80">{children}</Alert>;
}
