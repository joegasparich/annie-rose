/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import styled from "@emotion/styled"
import { useState } from "react"

import ScrollButton from "./scrollButton"
import Section from "./section"
import { boxShadow, colours } from "../constants"

import { hex2rgba } from "../utils"

const CIRCLE_SIZE = 275

const Circle = styled.div({
    transition: "all 0.1s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: hex2rgba(colours.blue, 0.7),
    color: colours.white,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    fontSize: 35,
    lineHeight: "52px",
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 20,
    textAlign: "center",

    "&:hover": {
        backgroundColor: colours.blue,
        color: colours.white,
    },
})
const buttonStyles = css({
    marginRight: 65,
    marginBottom: 100,
    padding: 0,
    borderRadius: CIRCLE_SIZE / 2,

    "&:focus": {
        outline: 0,
    },
    "&:focus-visible": {
        boxShadow: `0 0 0 3px ${colours.white}`,
    },
})

const WorkCarousel = ({ items, style, defaultBackground }) => {
    const [background, setBackground] = useState(defaultBackground)

    return (
        <div
            css={{
                position: "relative",
                backgroundColor: colours.lightblue,
                padding: "25px 0",
                boxShadow: boxShadow,
                height: "100vh",
            }}
        >
            <div
                css={[
                    {
                        height: "100%",
                        backgroundImage: `url(${background})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        padding: "125px 0",
                    },
                    style,
                ]}
            >
                <Section
                    css={{
                        marginLeft: "30%",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    {items.map(item => (
                        <ScrollButton
                            key={item.title}
                            targetId={item.targetId}
                            style={buttonStyles}
                            onMouseEnter={() => setBackground(item.images[0])}
                        >
                            <Circle>{item.title}</Circle>
                        </ScrollButton>
                    ))}
                </Section>
            </div>
        </div>
    )
}

export default WorkCarousel
