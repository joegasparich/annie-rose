export const gutterH = 40
export const gutterV = 30

export const colours = {
    red: "#EA454C",
    pink: "#FFEAF5",
    white: "#FFFFFF",
    black: "black",
    magenta: "#E571A5",
    blue: "#0D3B64",
    lightblue: "#EAF5FF",
    artimissPrimary: "#0D3B64",
    artimisSecondary: "#EAF5FF",
    thatsItPrimary: "#66519A",
    thatsItSecondary: "#E8DEFF",
    skinFuelPrimary: "#D50101",
    skinFuelSecondary: "#FFD3D3",
    votemojiPrimary: "#F1592A",
    votemojiSecondary: "#FFCAB7",
    sharePairPrimary: "#78C3A6",
    sharePairSecondary: "#E8FFF8",
}

export const boxShadow = "0px 3px 6px rgba(0,0,0,0.2)"

const breakpoints = [1500, 800, 600]
export const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)
