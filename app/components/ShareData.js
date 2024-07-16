"use client";
import React from "react";
import { Button } from "@nextui-org/react";

function ShareData() {
  return (
    <div className="flex flex-col gap-y-5">
      <div>
        <h1 className="text-4xl font-bold">👏 자랑하기</h1>
      </div>

      <div className="flex gap-x-5 gap-y-5 justify-center items-center flex-wrap">
        <Button className="p-5" size="lg" >
          #컬픽스마스카라
        </Button>
        <Button className="p-5" size="lg" >
          #수분크림
        </Button>
        <Button className="p-5" size="lg" >
          #로션
        </Button>
        <Button className="p-5" size="lg" color="primary">
          #샴푸
        </Button>
        <Button className="p-5" size="lg" >
          #컨디셔너
        </Button>
        <Button className="p-5" size="lg" >
          #컨디셔너
        </Button>
        <Button className="p-5" size="lg" >
          #컨디셔너
        </Button>
      </div>
    </div>
  );
}

export default ShareData;
