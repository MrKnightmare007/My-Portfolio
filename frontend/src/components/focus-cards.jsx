"use client";
import React, { useState } from "react";
import { cn } from "../components/lib/utils";
import GradientText from "./Gradient";

export const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-56 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}>
    <img src={card.src} alt={card.title} className="object-cover absolute inset-0" />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}>
      <div
        className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.title}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({
  cards
}) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex flex-col items-center">
         <h2 className="text-4xl md:text-7xl font-bold mb-8 mt-8">
          <GradientText
          colors={["#DAA520", "#FFD700", "#FFA500", "#D63718"]}
          animationSpeed={3}
          showBorder={false}
        >
          Certifications
        </GradientText>
          </h2>
          <div
      className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-8xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered} />
      ))}
    </div>
    </div>
  );
}
