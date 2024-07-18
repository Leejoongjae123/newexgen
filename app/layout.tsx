import { GeistSans } from "geist/font/sans";
import Navbar from "./components/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import TotalFooter from "./components/TotalFooter";
import Script from "next/script";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="flex justify-center items-center">
        <NextUIProvider>
          <Navbar></Navbar>
          {children}
          <TotalFooter></TotalFooter>
        </NextUIProvider>
        <Script id="channel-io">
          {`
            (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();
            ChannelIO('boot', {
              "pluginKey": "353322d4-9a31-4897-852c-27a311cef74f"
            });
          `}
        </Script>
      </body>
    </html>
  );
}
