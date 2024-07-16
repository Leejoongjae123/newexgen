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
      {/* <div className="h-[6vh]"></div> */}
      <div className="bg-[#EFC9F0] w-full h-full py-5">
        <Notifications></Notifications>
      </div>
      <div className="h-full w-[90vw] md:w-[60vw]">
        <NotificationText></NotificationText>
      </div>
      <div className="w-[90vw] md:w-[60vw] h-full">
        <ShareData></ShareData>
      </div>
      <div className="bg-[#eee] w-full h-full py-10">
        <BestReview></BestReview>
      </div>
      <div className="bg-white w-full h-full ">
        <YouTube></YouTube>
      </div>
    </div>
  );
}
