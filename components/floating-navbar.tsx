"use client";

import React, { useEffect, useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome } from "@tabler/icons-react";
import {
  AboutIcon,
  CareerIcon,
  FacebookIcon,
  GalleryIcon,
  GitLabIcon,
  InstagramIcon,
  LogoBlack,
  LogoWhite,
} from "./icons";
import { useTheme } from "next-themes";

export function FloatingNavbar() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Career",
      icon: (
        <CareerIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/career",
    },
    {
      title: "Information",
      icon: (
        <AboutIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/information",
    },
    {
      title: "Showcase",
      icon:
        currentTheme === "dark" ? (
          <LogoWhite className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ) : (
          <LogoBlack className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
      href: "/showcase",
    },
    {
      title: "Facebook",
      icon: (
        <FacebookIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/JDCBonina",
    },
    {
      title: "Instagram",
      icon: (
        <InstagramIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/jdcbonina/",
    },
    {
      title: "GitLab",
      icon: (
        <GitLabIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full flex items-end justify-center mb-4">
      <FloatingDock items={links} />
    </div>
  );
}
