"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Divider,
  Image,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";

import { cn } from "./cn";

const menuItems = ["공지사항", "자랑하기", "리얼리뷰"];

export default function Component(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      classNames={{
        base: " flex justify-center items-center",
        wrapper: "flex justify-center items-center w-[70vw] gap-x-20",
        item: "flex hidden md:flex items-center justify-center",
      }}
      height="10vh"
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left Content */}
      <NavbarBrand>
        <div className="rounded-full bg-white text-background">
          <Link href="/">
            <Image width={300} src="/images/logo2.png"></Image>
          </Link>
        </div>
      </NavbarBrand>

      {/* Right Content */}
      <NavbarContent className="hidden md:flex" justify="end">
        <NavbarItem className="ml-2 !flex gap-2">
          <Button className="text-default-500" radius="full" variant="light">
            <Icon icon="mdi:bell-outline" className="text-4xl " />
          </Button>
          <Link href="/login">
            <Button className="text-3xl p-5" size="lg" color="primary">
              로그인
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle className="text-default-400 md:hidden" />

      <NavbarMenu
        className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        motionProps={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: {
            ease: "easeInOut",
            duration: 0.2,
          },
        }}
      >
        <NavbarMenuItem className="mb-4">
          <Button
            fullWidth
            size="lg"
            color="primary"
            as={Link}
            className="text-3xl font-bold p-5 "
            href="/login"
          >
            로그인
          </Button>
        </NavbarMenuItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            className="flex flex-col justify-center items-center gap-y-5"
            key={`${item}-${index}`}
          >
            <div className="flex justify-center items-center">
              <Link
                className="flex justify-centermb-2 w-full font-bold text-2xl text-center"
                href="#"
                size="md"
              >
                {item}
              </Link>
            </div>

            {index < menuItems.length - 1 && <Divider className="opacity-50" />}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
