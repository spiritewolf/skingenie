export const q = [
  'How would you describe your skin immediately after cleansing and drying, but before putting on products?',
  'How would you describe the way your skin feels at the end of a long day?',
  'How many blemishes do you get each month?',
  'How often do you experience the following: redness, irritation, itchiness, peeling or flaking, feeling of warmth on cheeks?',
  'What do you wish for your skin care routine to fix for you?',
  'How often do you wear sunscreen?',
];

export const options = [
	{
		question: 'How would you describe your skin immediately after cleansing and drying, but before putting on products?',
		a: { text: 'Tight and/or dry (ready to slather on moisturizer)', score: 'dry' },
	    b: { text: 'Shiny and/or tight', score: 'oily' },
	    c: { text: 'Slightly warm, redness', score: 'combo' },
	    d: { text: 'None of the above, or feels normal', score: 'normal' },
	},
	{
		question: 'How would you describe the way your skin feels at the end of a long day?',
		a: { text: 'Dry or flaky, moisturizer standing by', score: 'dry' },
	    b: { text: 'Greasy all over', score: 'oily' },
	    c: { text: 'Dry or normal on cheeks, greasy in t-zone', score: 'combo' },
	    d: { text: 'Neither greasy nor dry', score: 'normal' },
	},
	{
		question: 'How many blemishes do you get each month?',
		a: { text: '10 or more', score: 'acne' },
	    b: { text: 'Around 4-6', score: 'acne' },
	    c: { text: 'Just a few', score: null },
	    d: { text: 'Very few or none at all', score: null },
	},
	{
		question: 'How often do you experience the following: redness, irritation, itchiness, peeling or flaking, feeling of warmth on cheeks?',
		a: { text: 'I experience multiple of those daily', score: 'sensitive' },
	    b: { text: 'I experience at least one of those daily', score: 'sensitive' },
	    c: { text: 'I experience some of those occasionally', score: null },
	    d: { text: 'I rarely or never experience those', score: null },
	},
	{
		question: 'What do you wish for your skin care routine to fix for you?',
		a: { text: 'Acne and/or blemishes', score: 'acne' },
	    b: { text: 'Texture/uneven skin tone, dark spots', score: 'texture' },
	    c: { text: 'Anti-aging, or proactive anti-aging', score: 'age' },
	    d: { text: `Radiance (glowy, healthy looking, or 'glass' skin)`, score: 'hydration' },
	},
	{
		question: 'How often do you wear sunscreen?',
		a: { text: 'Daily, with multiple reapplications', score: null },
	    b: { text: 'Daily, but I forget to reapply', score: null },
	    c: { text: `Only when I need to or when I'm in the sun`, score: 'sun' },
	    d: { text: 'Rarely, if ever', score: 'sun' },
	}
]
// export const options = [{
//   'How would you describe your skin immediately after cleansing and drying, but before putting on products?': {
//     a: { text: 'Tight and/or dry (ready to slather on moisturizer)', score: 'dry' },
//     b: { text: 'Shiny and/or tight', score: 'oily' },
//     c: { text: 'Slightly warm, redness', score: 'combo' },
//     d: { text: 'None of the above, or feels normal', score: 'normal' },
//   },
//   'How would you describe the way your skin feels at the end of a long day?': {
//     a: { text: 'Dry or flaky, moisturizer standing by', score: 'dry' },
//     b: { text: 'Greasy all over', score: 'oily' },
//     c: { text: 'Dry or normal on cheeks, greasy in t-zone', score: 'combo' },
//     d: { text: 'Neither greasy nor dry', score: 'normal' },
//   },
//   'How many blemishes do you get each month?': {
//     a: { text: '10 or more', score: 'acne' },
//     b: { text: 'Around 4-6', score: 'acne' },
//     c: { text: 'Just a few', score: null },
//     d: { text: 'Very few or none at all', score: null },
//   },
//   'How often do you experience the following: redness, irritation, itchiness, peeling or flaking, feeling of warmth on cheeks?': {
//     a: { text: 'I experience multiple of those daily', score: 'sensitive' },
//     b: { text: 'I experience at least one of those daily', score: 'sensitive' },
//     c: { text: 'I experience some of those occasionally', score: null },
//     d: { text: 'I rarely or never experience those', score: null },
//   },
//   'What do you wish for your skin care routine to fix for you?': {
//     a: { text: 'Acne and/or blemishes', score: 'acne' },
//     b: { text: 'Texture/uneven skin tone, dark spots', score: 'texture' },
//     c: { text: 'Anti-aging, or proactive anti-aging', score: 'age' },
//     d: { text: `Radiance (glowy, healthy looking, or 'glass' skin)`, score: 'hydration' },
//   },
//   'How often do you wear sunscreen?': {
//     a: { text: 'Daily, with multiple reapplications', score: null },
//     b: { text: 'Daily, but I forget to reapply', score: null },
//     c: { text: `Only when I need to or when I'm in the sun`, score: 'sun' },
//     d: { text: 'Rarely, if ever', score: 'sun' },
//   },
// }];
