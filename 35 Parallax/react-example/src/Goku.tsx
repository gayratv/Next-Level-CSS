import * as React from "react";
import { css } from "@emotion/react";
import { ScrollSpy } from "./ScrollSpy";
import { Parallax } from "./Parallax";
import { getBGImage } from "./utils";

export const Goku = () => {
  return (
    <>
      <ScrollSpy
        spyID="goku"
        handleScroll={(entry) => {
          if (
            entry.intersectionRatio > 0.6 &&
            !entry.target.classList.contains("animate-flight")
          ) {
            entry.target.classList.add("animate-flight");
          } else if (
            entry.intersectionRatio <= 0.6 &&
            entry.target.classList.contains("animate-flight")
          ) {
            entry.target.classList.remove("animate-flight");
          }
        }}
      />
      <Parallax
        backgroundImage={getBGImage(4254548)}
        justifyContent="center"
        css={css`
          perspective: 15px;

          @media screen and (max-width: 1700px) {
            background-size: cover;
          }
        `}
      >
        <div
          style={{
            position: "absolute",
            left: "calc(33% - 25px)",
            width: "25px",
            height: "100vh",
            backgroundColor: "black",
            zIndex: 10
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            right: "calc(33% - 25px)",
            width: "25px",
            height: "100vh",
            backgroundColor: "black",
            zIndex: -1
          }}
        ></div>
        <Parallax
          backgroundImage="url(https://i.pinimg.com/originals/4c/fb/7a/4cfb7af9324003e348e9c06009b0c6e5.png)"
          backgroundSize="300px"
          css={css`
            transform: translateZ(2px) scale(1) translateX(11%);

            &.animate-flight {
              animation: flight 2s ease-in;
              background-position: center 10%;
              background-size: 600px;
            }

            @keyframes flight {
              0% {
                background-position: center;
                background-size: 300px;
              }
              100% {
                background-position: center 10%;
                background-size: 600px;
              }
            }
          `}
          data-scrollspy="goku"
        />
      </Parallax>
    </>
  );
};
