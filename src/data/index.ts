export const skipRecommendations: Record<number, string[]> = {
  4: [
    "Suitable for small garden cleanups (soil, leaves, branches)",
    "Perfect for minor home decluttering",
    "Fits in tighter spaces—ideal for residential streets",
  ],
  6: [
    "Common choice for bathroom or kitchen renovations",
    "Handles small bulky items like furniture or broken appliances",
    "Good balance between size and placement flexibility",
  ],
  8: [
    "Ideal for full house clearances",
    "Handles heavier materials like rubble or bricks",
    "Often used in renovation or re-roofing projects",
  ],
  10: [
    "Great for mid-size construction waste",
    "Useful for shop refits or light demolition",
    "Too large for road placement without permit",
  ],
  12: [
    "Best for large-volume but light waste (packaging, insulation)",
    "Not ideal for heavy debris due to weight limits",
    "Common in commercial cleanouts",
  ],
  14: [
    "Perfect for warehouse or office clearance",
    "Ideal for bulky but non-heavy materials",
    "Often used for furniture or display unit disposal",
  ],
  16: [
    "Suited for major refurbishment projects",
    "Handles large volumes of wood, metal, or cardboard",
    "Too large for domestic driveways or on-road use",
  ],
  20: [
    "Industrial use—great for demolition sites",
    "Supports large amounts of construction waste",
    "Can take heavy items like concrete or steel",
  ],
  40: [
    "Maximum capacity—intended for commercial and industrial waste",
    "Not suitable for heavy materials due to weight restrictions",
    "Used for factory clear-outs or large-scale refurbishments",
  ],
};

export const skipDescriptions: Record<number, string> = {
  4: "4 yard skips, also known as 'midi skips', are perfect for small domestic jobs. They typically hold around 30–40 bin bags of waste.",
  6: "6 yard skips are commonly referred to as 'Builders Skips' and can hold around 50–60 bin bags. Ideal for heavy builder’s waste like soil and hardcore.",
  8: "8 yard skips are the most popular choice. Also called 'Builders Skips', they are great for hardcore waste and can hold about 60–80 bin bags.",
  10: "10 yard skips are great for large cleanouts and bulky waste. They hold approximately 80–100 bin bags and are perfect for non-heavy materials.",
  12: "12 yard skips, often called 'Maxi Skips', are great for large house or office clear-outs. Not suitable for heavy materials. Holds around 100–120 bin bags.",
  14: "14 yard skips are ideal for light bulky items like packaging, wood, or plastic. Perfect for commercial or retail clearance projects.",
  16: "16 yard skips are suited for big renovation or shop refit projects. Designed to hold large volumes of light waste such as cardboard or metal.",
  20: "20 yard roll-on roll-off skips are commonly used for light construction and demolition waste. These hold around 160–200 bin bags of waste.",
  40: "40 yard roll-on roll-off skips are the biggest we offer, designed for large light waste types. They hold approximately 350–400 bin bags of waste.",
};

export const skipDimensions: Record<
  number,
  {
    volume: {
      imperial: string;
      metric: string;
    };
    length: {
      imperial: string;
      metric: string;
    };
    width: {
      imperial: string;
      metric: string;
    };
    height: {
      imperial: string;
      metric: string;
    };
  }
> = {
  4: {
    volume: { imperial: "4 cu YRDs", metric: "3.06m³" },
    length: { imperial: "5'11\"", metric: "1.80m" },
    width: { imperial: "4'", metric: "1.22m" },
    height: { imperial: "3'2\"", metric: "0.96m" },
  },
  6: {
    volume: { imperial: "6 cu YRDs", metric: "4.06m³" },
    length: { imperial: "8'6\"", metric: "2.60m" },
    width: { imperial: "5'", metric: "1.52m" },
    height: { imperial: "4'", metric: "1.22m" },
  },
  8: {
    volume: { imperial: "8 cu YRDs", metric: "6.12m³" },
    length: { imperial: "10'6\"", metric: "3.2m" },
    width: { imperial: "5'9\"", metric: "1.75m" },
    height: { imperial: "4'", metric: "1.22m" },
  },
  10: {
    volume: { imperial: "10 cu YRDs", metric: "7.6m³" },
    length: { imperial: "12'", metric: "3.5m" },
    width: { imperial: "5'9\"", metric: "1.75m" },
    height: { imperial: "4'11\"", metric: "1.5m" },
  },
  12: {
    volume: { imperial: "12 cu YRDs", metric: "9.8m³" },
    length: { imperial: "12'2\"", metric: "3.7m" },
    width: { imperial: "5'9\"", metric: "1.75m" },
    height: { imperial: "5'6\"", metric: "1.68m" },
  },
  14: {
    volume: { imperial: "14 cu YRDs", metric: "10.7m³" },
    length: { imperial: "13'6\"", metric: "4.1m" },
    width: { imperial: "6'", metric: "1.83m" },
    height: { imperial: "5'10\"", metric: "1.78m" },
  },
  16: {
    volume: { imperial: "16 cu YRDs", metric: "12.2m³" },
    length: { imperial: "14'", metric: "4.27m" },
    width: { imperial: "6'", metric: "1.83m" },
    height: { imperial: "6'6\"", metric: "1.98m" },
  },
  20: {
    volume: { imperial: "20 cu YRDs", metric: "15.3m³" },
    length: { imperial: "19'11\"", metric: "6.07m" },
    width: { imperial: "7'4\"", metric: "2.23m" },
    height: { imperial: "5'4\"", metric: "1.62m" },
  },
  40: {
    volume: { imperial: "40 cu YRDs", metric: "30.58m³" },
    length: { imperial: "19'11\"", metric: "6.07m" },
    width: { imperial: "7'4\"", metric: "2.23m" },
    height: { imperial: "8'10\"", metric: "2.69m" },
  },
};

export const skipImages: string[] = [
  "/skip-2.png",
  "/skip-3.png",
  "/skip-blueprint.png",
];
