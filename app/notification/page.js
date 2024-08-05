import React from "react";
import { createClient } from "@/utils/supabase/server";
import Notifications2 from "@/app/components/Notification2";
import NotificationText from "@/app/components/NotificationText";
import Header from "@/components/Header";
import ShareData from "@/app/components/ShareData";
import TotalFooter from "@/app/components/TotalFooter";
// import BestReview4 from "@/app/components/BestReview4";
import YouTube from "@/app/components/YouTube";
import NotiFirst from "@/app/components/NotiFirst/NotiFirst";
import NotiSecond from "@/app/components/NotiSecond/NotiSecond";
import NotiThird from "@/app/components/NotiThird/NotiThird";
import NotiFourth from "@/app/components/NotiFourth/NotiFourth";
import NotiFifth from "@/app/components/NotiFifth/NotiFifth";
import SlideUp from "@/app/components/animation/SlideUp";

function page() {
  const OPTIONS = { align: "start", loop: true };
  const SLIDE_COUNT = 9;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="flex flex-col items-center justify-center gap-y-10">
      {/* <div className="h-[6vh]"></div> */}
      <SlideUp>
        <div className="bg-[#eee] w-full h-full py-5">
          <NotiFirst slides={SLIDES} options={OPTIONS} />
        </div>
      </SlideUp>
      <SlideUp>
        <div className="flex flex-col w-full h-full">
          <NotiSecond slides={SLIDES} options={OPTIONS}></NotiSecond>
        </div>
      </SlideUp>
      <SlideUp>
        <div className="flex flex-col w-full h-full">
          <NotiThird slides={SLIDES} options={OPTIONS}></NotiThird>
        </div>
      </SlideUp>
      <SlideUp>
        <div className="bg-white w-full h-full ">
          <NotiFourth slides={SLIDES} options={OPTIONS}></NotiFourth>
        </div>
      </SlideUp>
      <SlideUp>
        <div className="bg-white h-full w-[90vw] md:w-[60vw]">
          <NotiFifth></NotiFifth>
        </div>
      </SlideUp>
    </div>
  );
}

export default page;
