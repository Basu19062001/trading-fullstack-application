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

const WatchList = () => {
  const handleRemoveToWatchlist = (value) => {
    console.log(value);
  };
  return (
    <div
      // style={{ maxHeight: "740px", overflowY: "auto" }}
      className="p-5 lg:p-20"
    >
      <h1 className="font-bold text-3xl pb-5">Watchlist</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] py-5">Coin</TableHead>
            <TableHead>SYMBOL</TableHead>
            <TableHead>VOLUME</TableHead>
            <TableHead>MARKET CAP</TableHead>
            <TableHead>24h</TableHead>
            <TableHead className="">PRICE</TableHead>
            <TableHead className="text-right text-red-600">REMOVE</TableHead>
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
              <TableCell className="">$100348</TableCell>
              <TableCell className="text-right ">
                <Button
                  size="icon"
                  className="h-10 w-10"
                  variant="ghost"
                  onClick={() => handleRemoveToWatchlist(item.id)}
                >
                  <BookmarkFilledIcon className="w-6 h-6" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WatchList;
