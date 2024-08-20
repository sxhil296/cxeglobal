"use client";
import React from "react";
import { HeroParallax } from "@/app/components/ui/hero-parallax";
import Companies from "../components/Companies";
import TechStack from "../components/TechStack";
import {products} from '@/data/index'

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


