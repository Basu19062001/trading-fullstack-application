/* eslint-disable no-unused-vars */
import React from "react";
import "./Auth.css";
import SignupForm from "./SignupForm";
import { useLocation, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import ForgotPasswordForm from "./ForgotPasswordForm";
import SigninForm from "./SigninForm";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-screen relative authContainer">
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#030712] bg-opacity-40">
        <div className="bgBlure absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-[35rem] w-[30rem] rounded-md z-50 bg-black bg-opacity-50 shadow-2xl shadow-white">
          <h1 className="text-5xl font-bold pb-9">Quester Treading</h1>

          {location.pathname == "/signup" ? (
            <section>
              <SignupForm />
              <div className="flex items-center justify-center">
                <span>If have already account</span>
                <Button onClick={() => navigate("/signin")} variant="ghost">
                  signin
                </Button>
              </div>
            </section>
          ) : location.pathname == "/forgot-password" ? (
            <section>
              <ForgotPasswordForm />
              <div className="flex items-center justify-center">
                <span>Back to login</span>
                <Button onClick={() => navigate("/signin")} variant="ghost">
                  signin
                </Button>
              </div>
            </section>
          ) : (
            <section>
              <SigninForm />
              <div className="flex items-center justify-center">
                <span>If don't have account</span>
                <Button onClick={() => navigate("/signup")} variant="ghost">
                  signup
                </Button>
              </div>

              <div className="">
                <Button
                  onClick={() => navigate("/forgot-password")}
                  variant="outline"
                >
                  Forgot Password
                </Button>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
