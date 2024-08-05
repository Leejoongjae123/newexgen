import React from "react";
import { createClient } from "@/utils/supabase/server";
import SlideUp from "@/app/components/animation/SlideUp";
import BoastFirst from "@/app/components/BoastFirst/BoastFirst";
import BoastSecond from "@/app/components/BoastSecond/BoastSecond";
function page() {
  const OPTIONS = { align: "start", loop: true };
  const SLIDE_COUNT = 9;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="flex flex-col items-center justify-center gap-y-10">
      {/* <div className="h-[6vh]"></div> */}
      <SlideUp>
        <div className="bg-[#eee] w-[100vw] h-full py-5">
          <BoastFirst slides={SLIDES} options={OPTIONS} />
        </div>
      </SlideUp>
      <SlideUp>
        <div className="flex flex-col w-full h-full">
        <BoastSecond slides={SLIDES} options={OPTIONS} />
        </div>
      </SlideUp>
      <SlideUp>
        <div className="flex flex-col w-full h-full"></div>
      </SlideUp>
      <SlideUp>
        <div className="bg-white w-full h-full "></div>
      </SlideUp>
      <SlideUp>
        <div className="bg-white h-full w-[90vw] md:w-[60vw]"></div>
      </SlideUp>
    </div>
  );
}

export default page;
