/** @jsx jsx */
import { jsx } from "@emotion/react"
import { colours, mq } from "../constants"

const Marker = ({ text, left, colour, style }) => (
    <div
        css={[
            {
                position: "absolute",
                width: 200,
                height: 200,
                left: left,
                borderRadius: 200 / 2,
                border: `${20}px solid ${colour ?? colours.red}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: colour ?? colours.red,
                fontSize: 36,
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
                    width: left + 20 / 2,
                    height: 20,
                    background: colour ?? colours.red,
                    top: 70,
                    left: -(left + 20),

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
