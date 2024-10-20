export const PRODUCT_PRICES = {
  material: {
    silicon: 0,
    polycarbonate: 5_00, // Easier to read than 500
  },
  finish: {
    smooth: 0,
    textured: 3_00,
  },
} as const; // The as const in TypeScript is used to assert that an object (or array) should be treated as immutable, meaning that the values within it are read-only and cannot be changed.

export const BASE_PRICE = 14_00;
