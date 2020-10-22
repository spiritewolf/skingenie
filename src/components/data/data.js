export const q = [
  "How would you describe your skin immediately after cleansing and drying, but before putting on products?",
  "How would you describe the way your skin feels at the end of a long day?",
  "How many blemishes do you get each month?",
  "How often do you experience the following: redness, irritation, itchiness, peeling or flaking, feeling of warmth on cheeks?",
  "What do you wish for your skin care routine to fix for you? ",
  "How often do you wear sunscreen?",
];
export const option = {
  0: {
    a: {
      text: "Tight and/or dry (ready to slather on moisturizer)",
      score: 5,
    },
    b: { text: "Tight or slightly oily", score: 12 },
    c: { text: "Slightly warm, redness", score: 0 },
    d: { text: "None of the above, or feels normal", score: 0 },
  },
  1: {
    a: { text: "Dry or flaky, moisturizer standing by", score: 0 },
    b: { text: "Greasy all over", score: 0 },
    c: { text: "Dry or normal on cheeks, greasy in t-zone", score: 0 },
    d: { text: "Neither greasy nor dry", score: 0 },
  },
  2: {
    a: { text: "10 or more", score: 100 },
    b: { text: "Around 4-6", score: 100 },
    c: { text: "Just a few", score: 0 },
    d: { text: "Very few or none at all", score: 0 },
  },
  3: {
    a: { text: "I experience multiple of those daily", score: 500 },
    b: { text: "I experience at least one of those daily", score: 500 },
    c: { text: "I experience some of these occasionally", score: 0 },
    d: { text: "I rarely or never experience those", score: 0 },
  },
  4: {
    a: { text: "Acne and/or blemishes", score: 50000 },
    b: { text: "Texture/uneven skin tone, dark spots", score: 5000 },
    c: { text: "Anti-aging, or proactive anti-aging", score: 10000 },
    d: {
      text: "Radiance (glowy, healthy looking, or 'glass' skin)",
      score: 0,
    },
  },
  5: {
    a: { text: "Daily, with multiple reapplications", score: 0 },
    b: { text: "Daily, but I forget to reapply", score: 0 },
    c: { text: "Only when I need to or when I'm in the sun", score: 0 },
    d: { text: "Rarely, if ever", score: 0 },
  },
};
