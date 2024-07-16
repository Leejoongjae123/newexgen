"use client";

import React from "react";
import {Link, Spacer} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import { Image } from "@nextui-org/react";

const navLinks = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Services",
    href: "#",
  },
  {
    name: "Projects",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "Careers",
    href: "#",
  },
];

const socialItems = [
  {
    name: "Facebook",
    href: "#",
    icon: (props) => <Icon {...props} icon="fontisto:facebook" />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: (props) => <Icon {...props} icon="fontisto:instagram" />,
  },
  {
    name: "Twitter",
    href: "#",
    icon: (props) => <Icon {...props} icon="fontisto:twitter" />,
  },
  {
    name: "GitHub",
    href: "#",
    icon: (props) => <Icon {...props} icon="fontisto:github" />,
  },
  {
    name: "YouTube",
    href: "#",
    icon: (props) => <Icon {...props} icon="fontisto:youtube" />,
  },
];

export default function Component() {
  return (
    <footer className="flex w-full flex-col">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="flex items-center justify-center">
          {/* <AcmeIcon size={44} /> */}
          <Image width={50} src='/images/logo.png'></Image>
          <span className="font-bold text-2xl">체험단시대</span>
        </div>
        <Spacer y={6} />
        <div className="flex justify-center gap-x-10">

            
            <Link isExternal href="https://www.instagram.com" className="text-default-500">
              <Icon icon="mdi:instagram" className="text-4xl" />
            </Link>
            <Link isExternal href="https://www.naver.com" className="text-default-500">
              <Icon icon="mdi:facebook" className="text-4xl" />
            </Link>
            <Link isExternal href="https://www.naver.com" className="text-default-500">
              <Icon icon="mdi:twitter" className="text-4xl" />
            </Link>
              
            

        </div>
        <Spacer y={4} />
        <p className="mt-1 text-center text-md text-default-400">
          &copy; 2024 Acme Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
