import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Notifications from "./components/Notification";
import NotificationText from "./components/NotificationText";
import Header from "@/components/Header";
import ShareData from "./components/ShareData";
import TotalFooter from "./components/TotalFooter";
import BestReview from "./components/BestReview";
import YouTube from "./components/YouTube";
import SlideUp from "./components/animation/SlideUp";
import SlideLeft from "./components/animation/SlideLeft";
import SlideRight from "./components/animation/SlideRight";
export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex flex-col items-center justify-center gap-y-10">
      <SlideUp>
        <div className="bg-[#EFC9F0] w-full h-full py-5">
          <Notifications></Notifications>
        </div>
      </SlideUp>
      <SlideUp>
        <div className="h-full w-[90vw] md:w-[60vw]">
          <NotificationText></NotificationText>
        </div>
      </SlideUp>
      <SlideUp>
        <div className="w-[90vw] md:w-[60vw] h-full">
          <ShareData></ShareData>
        </div>
      </SlideUp>
      <SlideLeft>
        <div className="bg-[#eee] w-full h-full py-10">
          <BestReview></BestReview>
        </div>
      </SlideLeft>
      <SlideRight>
        <div className="bg-white w-full h-full 0">
          <YouTube></YouTube>
        </div>
      </SlideRight>
    </div>
  );
}
