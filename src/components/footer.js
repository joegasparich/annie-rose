/** @jsx jsx */
import { jsx } from "@emotion/react"

import bannerImage from "../images/banner.svg"

const Footer = () => (
    <footer>
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
