'use client';

import React from "react";
import { WavyBackground } from "../ui/wavy-background";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WavyTransitionSection() {
  return (
    <WavyBackground 
      // Custom Chattrbox brand theme wave colors (Blues, Oranges, and Indigo accents)
      colors={[
        "#3b82f6", // Blue 500
        "#f97316", // Orange 500
        "#6366f1", // Indigo 500
        "#0ea5e9", // Sky 500
        "#fb923c"  // Orange 400
      ]}
      waveWidth={40}
      backgroundFill="#ffffff" // Clean white background matching your theme
      blur={12}
      speed="fast"
      waveOpacity={0.6}
      containerClassName="relative py-32 sm:py-40 overflow-hidden"
      className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10"
    >

    </WavyBackground>
  );
}