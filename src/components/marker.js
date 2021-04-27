/** @jsx jsx */
import { jsx } from "@emotion/react"
import { colours, mq } from "../constants"

const Marker = ({ text, colour, size, left, style }) => (
    <div
        css={[
            {
                position: "absolute",
                width: size,
                height: size,
                left: left,
                borderRadius: size / 2,
                border: `${25}px solid ${colour ?? colours.red}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: colour ?? colours.red,
                fontSize: 50,
                fontWeight: "bold",
                textTransform: "uppercase",

                [mq[2]]: {
                    width: 150,
                    height: 150,
                    left: "50vw",
                    borderRadius: 75,
                    fontSize: 25,
                    border: `${12}px solid ${colour ?? colours.red}`,
                },

                "&::before": {
                    content: "''",
                    position: "absolute",
                    width: left + 25 / 2,
                    height: 25,
                    background: colour ?? colours.red,
                    top: size / 2 - 50,
                    left: -(left + 25),

                    [mq[2]]: {
                        width: "calc(50vw + 12px)",
                        height: 12,
                        top: 56,
                        left: "calc(-50vw - 12px)",
                    },
                },
            },
            style,
        ]}
    >
        {text}
    </div>
)

export default Marker
