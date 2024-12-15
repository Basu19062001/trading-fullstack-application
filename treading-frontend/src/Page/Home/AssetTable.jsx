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
import { useNavigate } from "react-router";

function AssetTable() {
  const navigate = useNavigate();

  return (
    <div style={{ maxHeight: "740px", overflowY: "auto" }}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Coin</TableHead>
            <TableHead>SYMBOL</TableHead>
            <TableHead>VOLUME</TableHead>
            <TableHead>MARKET CAP</TableHead>
            <TableHead>24h</TableHead>
            <TableHead className="text-right">PRICE</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
            (item, index) => (
              <TableRow key={index}>
                <TableCell
                  onClick={() => navigate("/market/bitcoin")}
                  className="font-medium flex items-center gap-2 "
                >
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
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default AssetTable;
