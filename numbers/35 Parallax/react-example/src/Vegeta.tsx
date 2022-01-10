import * as React from "react";
import { css } from "@emotion/react";
import { ScrollSpy } from "./ScrollSpy";
import { Parallax } from "./Parallax";
import { getBGImage } from "./utils";

export const Vegeta = () => {
  return (
    <>
      <ScrollSpy
        spyID="vegeta"
        handleScroll={(entry) => {
          if (
            entry.isIntersecting &&
            1 - entry.intersectionRatio > 0.2 &&
            !entry.target.classList.contains("animate-ki-blast")
          ) {
            entry.target.classList.add("animate-ki-blast");
          } else if (
            1 - entry.intersectionRatio <= 0.2 &&
            entry.target.classList.contains("animate-ki-blast")
          ) {
            entry.target.classList.remove("animate-ki-blast");
          }
        }}
      />
      <Parallax
        backgroundImage={getBGImage(1906658)}
        justifyContent="center"
        css={css`
          overflow: hidden;
          perspective: 15px;
          z-index: 10;
          @media screen and (max-width: 1700px) {
            background-size: cover;
          }
          &.animate-ki-blast {
            &:after {
              animation: fallBack 1.8s ease-in-out;
              animation-iteration-count: 1;
              animation-fill-mode: forwards;
              height: 280px;
              width: 280px;
              bottom: 350px;
              left: 42%;
            }
            &:before {
              animation: kiBlast 2s ease-in-out;
              animation-iteration-count: 1;
              animation-fill-mode: forwards;
              height: 600px;
              width: 600px;
              transform: translateZ(5px) translateX(150%) translateY(400px);
            }
          }

          @keyframes fallBack {
            0% {
              height: 300px;
              width: 300px;
              bottom: 300px;
              left: 50%;
            }

            100% {
              height: 280px;
              width: 280px;
              bottom: 350px;
              left: 42%;
            }
          }

          @keyframes kiBlast {
            0% {
              height: 30px;
              width: 30px;
              transform: translateZ(2px) translateX(64%) translateY(49px);
            }
            100% {
              height: 600px;
              width: 600px;
              transform: translateZ(5px) translateX(150%) translateY(400px);
            }
          }
        `}
        afterImage="url(vegeta.png)"
        beforeImage="url(https://i.pinimg.com/originals/89/0d/39/890d3963185876af373bb636d31a418f.png)"
        data-scrollspy="vegeta"
      ></Parallax>
    </>
  );
};
