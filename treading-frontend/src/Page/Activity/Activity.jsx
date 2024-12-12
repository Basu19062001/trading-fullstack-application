/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
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
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import React from "react";

const Activity = () => {
  return (
    <div
      // style={{ maxHeight: "740px", overflowY: "auto" }}
      className="p-5 lg:p-20"
    >
      <h1 className="font-bold text-3xl pb-5">Activity</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] py-5">Date & Time</TableHead>
            <TableHead>Treading Pair</TableHead>
            <TableHead>Buy Price</TableHead>
            <TableHead>Sell Price</TableHead>
            <TableHead>Order Type</TableHead>
            <TableHead className="">Profite/Loss</TableHead>
            <TableHead className="text-right ">Value</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>2024/12/12</p>
                <p className="text-gray-400">12.36.56</p>
              </TableCell>
              <TableCell className="font-medium flex items-center gap-2 ">
                <Avatar className="-z-50 w-8 h-8">
                  <AvatarImage
                    src="https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png"
                    alt="Bitcoin"
                  />
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
              <TableCell>58197214114</TableCell>
              <TableCell>1985006236007</TableCell>
              <TableCell>0.89183</TableCell>
              <TableCell className="">$100348</TableCell>
              <TableCell className="text-right ">365</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Activity;
