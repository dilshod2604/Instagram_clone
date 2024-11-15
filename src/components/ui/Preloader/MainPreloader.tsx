"use client";

import React from "react";

const MainPreloader = () => {
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <video muted autoPlay loop playsInline className="w-[200px] h-[200px]">
        <source src="/instagram.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default MainPreloader;
