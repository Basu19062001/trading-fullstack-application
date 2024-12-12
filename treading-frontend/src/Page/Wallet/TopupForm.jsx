/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DotFilledIcon } from "@radix-ui/react-icons";
import React from "react";

const TopupForm = () => {
  const [amount, setAmount] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("");

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const handleSubmit = () => {
    console.log(amount, paymentMethod);
  };
  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input
          className="py-7 text-lg"
          placeholder="$9999"
          onChange={handleChange}
          value={amount}
        />
      </div>

      <div>
        <h1 className="pb-1">Select payment method</h1>
        <RadioGroup
          className="flex"
          defaultValue="RAZORPAY"
          onValueChange={(value) => handlePaymentMethodChange(value)}
        >
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-9 w-9"
              value="RAZORPAY"
              id="r1"
            />

            <Label htmlFor="r1">
              <div className="bg-white rounded-md px-5 py-3 w-32">
                <img
                  className="h-5"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOXVBxLnhqCbh9icORWnu4ZW0QjBam341bxg&s"
                  alt="RAZORPAY"
                />
              </div>
            </Label>
          </div>

          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-9 w-9"
              value="STRIPE"
              id="r1"
            />

            <Label htmlFor="r1">
              <div className="bg-white rounded-md px-5  w-32">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRek2EqBo5YIE0TPMVMlIFA594WZZeuqYdAQQ&s"
                  alt="STRPIE"
                />
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>

      <Button onClick={handleSubmit} className="w-full py-7" variant="outline">
        Submit
      </Button>
    </div>
  );
};

export default TopupForm;
