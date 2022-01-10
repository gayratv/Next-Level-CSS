import * as React from "react";

import { render } from "react-dom";
import { Global, css } from "@emotion/react";

import { Vegeta } from "./Vegeta";
import { Goku } from "./Goku";

function App() {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap");
          html {
            scroll-behavior: smooth;
          }
          html,
          body {
            height: 100%;
            margin: 0;
            overflow-x: hidden;
          }

          body {
            background-color: black;

            transform: translateZ(1px);
          }

          main {
            position: relative;
            margin: 0 auto;
            max-width: 1024px;
            perspective: 10px;
          }
        `}
      />
      <main>
        <Vegeta />
        <Goku />
      </main>
    </>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
