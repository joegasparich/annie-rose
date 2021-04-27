/** @jsx jsx */
import { jsx } from "@emotion/react"
import { colours, mq } from "../constants"

import bannerImage from "../images/banner.svg"

const Footer = () => (
    <footer>
        <p
            css={{
                margin: "10px 100px",
                textAlign: "right",
                color: colours.red,

                [mq[2]]: {
                    margin: "10px 20px",
                },
            }}
        >
            Website by Joe Gasparich
        </p>
        <div
            css={{
                backgroundImage: `url(${bannerImage})`,
                height: 100,
                width: "100vw",
                backgroundSize: "cover",
                backgroundPosition: "top",
            }}
        />
    </footer>
)

export default Footer
