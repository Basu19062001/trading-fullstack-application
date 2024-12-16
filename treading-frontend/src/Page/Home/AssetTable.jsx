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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const AssetTable = ({ coin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!coin || coin.length === 0) {
    return <div>No data available</div>;
  }

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
          {coin.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell
                onClick={() => navigate(`/market/${item.id}`)}
                className="font-medium flex items-center gap-2 cursor-pointer"
              >
                <Avatar className="-z-50 w-10 h-10">
                  <AvatarImage src={item.image} alt={item.name} />
                </Avatar>
                <span>{item.name}</span>
              </TableCell>
              <TableCell>{item.symbol}</TableCell>
              <TableCell>{item.total_volume}</TableCell>
              <TableCell>{item.market_cap}</TableCell>
              <TableCell>{item.price_change_percentage_24h}</TableCell>
              <TableCell className="text-right">
                ${item.current_price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AssetTable;
