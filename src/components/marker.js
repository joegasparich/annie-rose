/** @jsx jsx */
import { jsx } from "@emotion/react"
import { colours } from "../constants"

const THICKNESS = 25

const Marker = ({ text, colour, size, left, style }) => (
    <div
        css={[
            {
                position: "absolute",
                width: size,
                height: size,
                left: left,
                borderRadius: size / 2,
                border: `${THICKNESS}px solid ${colour ?? colours.red}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: colour ?? colours.red,
                fontSize: 50,
                fontWeight: "bold",
                textTransform: "uppercase",

                "&::before": {
                    content: "''",
                    position: "absolute",
                    width: left + THICKNESS / 2,
                    height: THICKNESS,
                    background: colour ?? colours.red,
                    top: size / 2 - THICKNESS * 1.5,
                    left: -(left + THICKNESS),
                },
            },
            style,
        ]}
    >
        {text}
    </div>
)

export default Marker
