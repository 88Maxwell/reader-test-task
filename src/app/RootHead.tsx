"use client";

import { mediaStyles } from "@/domains/common/components/MediaProvider";

export function RootHead() {
  return (
    <head>
      <style
        key="fresnel-css"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: mediaStyles }}
        type="text/css"
      />
    </head>
  );
}
