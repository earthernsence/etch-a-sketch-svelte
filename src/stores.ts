import { writable } from "svelte/store";

export const penColour = writable("#000000");
export const dimensions = writable(25);
export const cleared = writable(0);
export const currSquares = writable(Math.pow(25, 2));
export const useEraser = writable(false);
export const useShading = writable(false);
export const alert = writable("");
export const grid = writable(document.createElement("div"));
