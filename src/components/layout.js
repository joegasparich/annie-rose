/** @jsx jsx */
import { jsx } from "@emotion/react"
import * as React from "react"
import { Helmet } from "react-helmet"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "./base.css"
// import { colours, gutterH, gutterV } from "../constants"

// const OuterBorder = () => (
//     <div
//         css={{
//             padding: `${gutterV}px ${gutterH}px`,
//             position: "absolute",
//             left: 0,
//             top: 0,
//             width: "100%",
//             height: "100%",
//             pointerEvents: "none",
//         }}
//     >
//         <div
//             css={{
//                 borderRadius: 75,
//                 border: `5px solid ${colours.red}`,
//                 height: "100%",
//             }}
//         />
//     </div>
// )

const Layout = ({ children, style }) => {
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Annie Rose</title>
                <link rel="canonical" href="https://annierose.nz" />
            </Helmet>
            <Header />
            <div
                css={[
                    {
                        borderRadius: 100,
                        overflow: "auto",
                        position: "relative",
                    },
                    style,
                ]}
            >
                <main>{children}</main>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Layout
