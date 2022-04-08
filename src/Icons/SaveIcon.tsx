import React from "react";

interface ISaveIconProps {
  width: number;
}

export function SaveIcon({ width }: ISaveIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} viewBox="0 0 231 231" fill="#c4c4c4">
        <path d="M198.5,0h-17v83h-132V0h-49v231h230V32.668L198.5,0z M197.5,199h-165v-83h165V199z"/>
        <rect width="33" x="131.5" height="66"/>
    </svg>
  );
}
