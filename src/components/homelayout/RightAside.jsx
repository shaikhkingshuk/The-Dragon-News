import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";

const RightAside = () => {
  return (
    <div className="space-y-8">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
    </div>
  );
};

export default RightAside;
