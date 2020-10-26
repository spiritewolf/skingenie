export const resultData = (data) => {
  const cleanser = {
    0: "La Roche Posay Gentle Hydrating Cleanser",
    1: "CosRx Good Morning Gel Cleanser",
    2: "Indie Lee Brightening Cleanser",
    3: "CeraVe Foaming Facial Cleanser",
  };
  const serum = {
    0: "Glossier Pure",
    1: "Herbivore Bakuchoil Retinol Alternative Serum",
    2: "Dr.Jart Cicipair Tiger Grass Serum",
    3: "Paulas Choice 2% BHA Liquid Exfoliant",
  };
  const moisturizer = {
    0: "CeraVe Moisturizing Lotion",
    1: "Biossance Squalane Probiotic Gel Moisturizer",
    2: "Lotus Anti-Aging",
    3: "Dr.Jart Ceramidin Cream",
  };
  const sunscreen = {
    0: "PURITO Comfy Water Sun Block SPF 50",
    1: "Supergoop Unseen Sunscreen SPF 40",
  };
  if (data < 1000) {
    //if skin type is normal
    return {
      cleanser: cleanser[2],
      serum: serum[2],
      moisturizer: moisturizer[0],
      sunscreen: sunscreen[1],
    };
  } else if (data % 5 == 0) {
    //if skin type is dry
    if (data > 50500) {
      //if data is acne prone and sensitive
      return {
        cleanser: cleanser[0],
        serum: serum[0],
        moisturizer: moisturizer[0],
        sunscreen: sunscreen[0],
      };
    } else if (data < 50000 && data > 9000) {
      //if anti-aging
      return {
        cleanser: cleanser[2],
        serum: serum[1],
        moisturizer: moisturizer[2],
        sunscreen: sunscreen[1],
      };
    } else if (data < 8000 && data > 4000) {
      return {
        cleanser: cleanser[2],
        serum: serum[3],
        moisturizer: moisturizer[0],
        sunscreen: sunscreen[0],
      };
    }
  } else if (data % 3 == 0) {
    if (data > 50500) {
      //if data is acne prone and sensitive
      return {
        cleanser: cleanser[1],
        serum: serum[0],
        moisturizer: moisturizer[1],
        sunscreen: sunscreen[0],
      };
    } else if (data < 50000 && data > 9000) {
      //if anti-aging
      return {
        cleanser: cleanser[3],
        serum: serum[1],
        moisturizer: moisturizer[2],
        sunscreen: sunscreen[1],
      };
    } else if (data < 8000 && data > 4000) {
      return {
        cleanser: cleanser[2],
        serum: serum[3],
        moisturizer: moisturizer[1],
        sunscreen: sunscreen[0],
      };
    }
  } else {
    return {
      cleanser: cleanser[2],
      serum: serum[2],
      moisturizer: moisturizer[0],
      sunscreen: sunscreen[1],
    };
  }
};

const result = { a: "dry", b: "combo", c: "sensitive", d: "acne" };
const tally = () => {
  let type;
  let concern;
  let sensitive;
};
