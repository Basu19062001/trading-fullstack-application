import { Button } from "@/components/ui/button";
import React from "react";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";

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
          <StockChart/>
        </div>
      </div>
    </div>
  );
}

export default Home;
