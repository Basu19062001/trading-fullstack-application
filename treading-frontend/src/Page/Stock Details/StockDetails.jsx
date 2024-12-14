import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const StockDetails = () => {
  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <div>
            <Avatar>
              <AvatarImage src={""} />
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetails;
