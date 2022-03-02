import { css } from "styled-components";

// Grid variables
export const maxRowWidth = "133rem";
export const maxRowWidthExtended = "155rem";
export const centerExtendedSidePadding = "11rem";

export const Variables = css`
  :root {
    /* Color variables */
    --color-white: #ffffff;
    --color-black: #000000;

    /* Other colors */
    --color-1: #999999;
    --color-2: #dddddd;
    --color-3: #f9f9fb;
    --color-4: #65c100;
    --color-5: #65c100;
    --color-6: #aaaaaa;
    --color-7: #eeeeee;
    --color-8: #c12300;
    --color-9: #64c000;
    --color-10: #b3b3b3;
  }
`;

export const btnSizes = {
  sm: css`
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    padding-inline: 3rem;
  `,
  md: css`
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
    padding-inline: 3.31rem;
  `,
};
