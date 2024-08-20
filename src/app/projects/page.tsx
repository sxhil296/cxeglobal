"use client";
import React from "react";
import { HeroParallax } from "@/app/components/ui/hero-parallax";
import Companies from "../components/Companies";
import TechStack from "../components/TechStack";

const page = () => {
  return (
    <div>
      <HeroParallax products={products}  />
      <Companies />
      <TechStack />
    </div>
  );
};

export default page;

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/aboutPage1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/connect.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/connect.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/aboutPage1.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/connect.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/aboutPage1.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/aboutPage1.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/aboutPage1.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/aboutPage1.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/hero-bggg.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/server.jpg",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/hero-bggg.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/aboutPage1.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/hero-bggg.jpg",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/aboutPage1.png",
  },
];
