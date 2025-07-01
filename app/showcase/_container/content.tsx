"use client";

import Container from "@/components/container";
import { FocusCards } from "@/components/ui/focus-cards";
import { link } from "fs";

export const Content = () => {
  const cards = [
    {
      title: "LOGO Express",
      src: "projects/logo-express/full.png",
      link: "https://logo-express-bay.vercel.app/",
    },
    {
      title: "LOGO Tracker",
      src: "projects/eims/full.png",
      link: "https://eims.mylogoinc.com/",
    },
    {
      title: "AB Cargo Forwarders",
      src: "projects/ab-cargo/full.png",
      link: "https://abcforwarders.com/",
    },
    {
      title: "Workforce",
      src: "projects/workforce/full.png",
      link: "#",
    },
    {
      title: "7107 Islands Placement and Promotions Inc.",
      src: "projects/my-7107/full.png",
      link: "https://www.my7107.com/",
    },
    {
      title: "LOGO Inc.",
      src: "projects/mylogoinc/full.png",
      link: "https://mylogoinc.com/",
    },
    {
      title: "7107 Islands(First Design)",
      src: "projects/7107-landing/full.png",
      link: "https://7107-landing-fmfb.vercel.app",
    },
  ];

  return (
    <>
      <Container>
        <FocusCards cards={cards} />
      </Container>
    </>
  );
};
