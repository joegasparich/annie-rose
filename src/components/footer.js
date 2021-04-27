/** @jsx jsx */
import { jsx } from "@emotion/react"
import { colours } from "../constants"

import bannerImage from "../images/banner.svg"

const Footer = () => (
    <footer>
        <p
            css={{
                margin: "10px 100px",
                textAlign: "right",
                color: colours.red,
            }}
        >
            Website by Joe Gasparich
        </p>
        <div
            css={{
                backgroundImage: `url(${bannerImage})`,
                height: 140,
                backgroundSize: "cover",
            }}
        />
    </footer>
)

export default Footer
