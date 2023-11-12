import { styled } from "@mui/material";
import { keyframes } from "@emotion/react";

export const waveKeyframe = keyframes`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`;

export const bounce = keyframes`
0%, 100% {
  transform: translateY(0)
}
50% {
  transform: translateY(-10px)
}

`;

export const debounce = keyframes`
0% {
  transform: translateY(0)
}
25% {
  transform: translateY(-30px)
}

50% {
  transform: translateY(0)
}

75% {
  transform: translateY(40px)
}

100% {
  transform: translateY(0)

}

`;

// right bounce animation
export const bounceRight = keyframes`
0%, 100% {
  transform: translateX(0)
}
50% {
  transform: translateX(5px)
}
`;

// right bounce animation
export const flash = keyframes`
0%, 100% {
  opacity: 0
}
50% {
  opacity: 0.1
}

95% {
  opacity: 0.2
}

`;

// move from left to write animation
export const moveLeftToRight = keyframes`
0% {
  /* transform: translateX(-100%) */
  width: 0
}
100% {
  /* transform: translateX(0) */
  width: 100%
}
`;

export const Container = styled("div")({
  paddingLeft: "15px",
  paddingRight: "15px",
  marginLeft: "auto",
  marginRight: "auto",

  // Small
  "@media (min-width: 768px)": {
    width: "750px",
  },

  // Medium
  "@media (min-width: 992px)": {
    width: "970px",
  },

  // Large
  "@media (min-width: 1200px)": {
    width: "1170px",
  },
});


export const Spikes = styled('div')(({theme})=>({
  position: 'relative',
  "&::after":{
    content: "''",
    position: "absolute",
    right: 0,
    width: "100%",
    height: "30px",
    zIndex: 1,
    backgroundImage: "linear-gradient(135deg, white 25%, transparent 25%), linear-gradient(225deg, white 25%, transparent 25%)",
    backgroundSize: "30px 30px",
  }
}))
