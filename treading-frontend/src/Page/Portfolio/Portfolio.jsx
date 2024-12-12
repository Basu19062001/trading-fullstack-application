/* eslint-disable no-unused-vars */
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

const Portfolio = () => {
  return (
    <div
      // style={{ maxHeight: "740px", overflowY: "auto" }}
      className="p-5 lg:p-20"
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ASSET</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead>UNIT</TableHead>
            <TableHead>CHANGE</TableHead>
            <TableHead>CHANGE%</TableHead>
            <TableHead className="text-right">VOLUME</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2 ">
                <Avatar className="-z-50">
                  <AvatarImage
                    src="https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png"
                    alt="Bitcoin"
                  />
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell>58197214114</TableCell>
              <TableCell>1985006236007</TableCell>
              <TableCell>0.89183</TableCell>
              <TableCell className="text-right">$100348</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Portfolio;
