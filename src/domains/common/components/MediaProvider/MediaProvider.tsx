"use client";

import { createMedia } from "@artsy/fresnel";
import { twConfig } from "../../utils/getTWConfig";

// from "123px" to 123 (number)
const breakpoints = Object.fromEntries(
  Object.entries(twConfig.theme.screens).map((e) => [
    e[0],
    Number(e[1].slice(0, -2)),
  ]),
);

const AppMedia = createMedia({ breakpoints });

export const mediaStyles = AppMedia.createMediaStyle();
export const Media = AppMedia.Media;
export const MediaContextProvider = AppMedia.MediaContextProvider;
