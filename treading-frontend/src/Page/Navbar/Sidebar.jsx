/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { logout } from "@/State/Auth/Action";
import {
  ActivityLogIcon,
  DashboardIcon,
  ExitIcon,
  HomeIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import {
  BookmarkIcon,
  CreditCardIcon,
  LandmarkIcon,
  WalletIcon,
} from "lucide-react";
import path from "path";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const menu = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon className="h-6 w-6" />,
  },

  {
    name: "Portfolio",
    path: "/portfolio",
    icon: <DashboardIcon className="h-6 w-6" />,
  },

  {
    name: "WatchList",
    path: "/watchList",
    icon: <BookmarkIcon className="h-6 w-6" />,
  },

  {
    name: "Activity",
    path: "/activity",
    icon: <ActivityLogIcon className="h-6 w-6" />,
  },

  {
    name: "Wallet",
    path: "/wallet",
    icon: <WalletIcon className="h-6 w-6" />,
  },

  {
    name: "Payment Details",
    path: "/payment-details",
    icon: <LandmarkIcon className="h-6 w-6" />,
  },

  {
    name: "Withdrawal",
    path: "/withdrawal",
    icon: <CreditCardIcon className="h-6 w-6" />,
  },

  {
    name: "Profile",
    path: "/profile",
    icon: <PersonIcon className="h-6 w-6" />,
  },

  {
    name: "Logout",
    path: "/logout",
    icon: <ExitIcon className="h-6 w-6" />,
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoguot = () => {
    dispatch(logout());
  };

  return (
    <div className="mt-10 space-y-5">
      {menu.map((item) => (
        <div key={item.name}>
          <SheetClose className="w-full">
            <Button
              variant="outline"
              className="flex gap-5 py-6 w-full"
              onClick={() => {
                navigate(item.path);
                if (item.name == "Logout") {
                  handleLoguot();
                }
              }}
            >
              <span className="w-8">{item.icon}</span>
              <p>{item.name}</p>
            </Button>
          </SheetClose>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
