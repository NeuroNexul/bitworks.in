import React from "react";

type Props = object;

export default function Gooey({}: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="size-0 hidden">
      <defs>
        <filter id="fancy-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
}