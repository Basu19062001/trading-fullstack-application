import { Button } from "@/components/ui/button";
import React from "react";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { DotIcon, MessageCircle } from "lucide-react";
import { Cross1Icon } from "@radix-ui/react-icons";

function Home() {
  const [category, setCategory] = React.useState("all");

  const handleCategory = (value) => {
    setCategory(value);
  };

  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-4">
            <Button
              className="rounded-full"
              variant={category == "all" ? "default" : "outline"}
              onClick={() => handleCategory("all")}
            >
              All
            </Button>

            <Button
              className="rounded-full"
              variant={category == "top50" ? "default" : "outline"}
              onClick={() => handleCategory("top50")}
            >
              Top 50
            </Button>

            <Button
              className="rounded-full"
              variant={category == "topGainers" ? "default" : "outline"}
              onClick={() => handleCategory("topGainers")}
            >
              Top Gainers
            </Button>

            <Button
              className="rounded-full"
              variant={category == "topLosers" ? "default" : "outline"}
              onClick={() => handleCategory("topLosers")}
            >
              Top Losers
            </Button>
          </div>

          <AssetTable />
        </div>
        <div className="hidden lg:block lg:w-[50%] p-5">
          <StockChart />

          <div className="flex gap-5 items-center">
            <div>
              <Avatar>
                <AvatarImage
                  src={
                    "https://cdn.pixabay.com/photo/2021/12/03/10/32/ethereum-6842405_640.png"
                  }
                  alt="Ethereum"
                  className="w-14 h-14"
                />
              </Avatar>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p>ETH</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400">Ethereum</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold">5464</p>
                <p className="text-red-600">
                  <span>-1319049822.578</span>
                  <span>(-0.29803%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2">
        <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900">
          <div className="flex justify-between items-center border-b px-6 h-[12%]">
            <p>Chat Bot</p>
            <Button variant="ghost" size="icon">
              <Cross1Icon />
            </Button>
          </div>
        </div>

        <div className="relative w-[10rem] cursor-pointer group">
          <Button className="w-full h-[3rem] gap-2 items-center">
            <MessageCircle
              size={30}
              // className="fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#1a1a1a]"
            />
            <span className="text-1xl">Chat Bot</span>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;
