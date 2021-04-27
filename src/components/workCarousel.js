/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import styled from "@emotion/styled"
import { useState } from "react"

import ScrollButton from "./scrollButton"
import Section from "./section"
import { boxShadow, colours, mq } from "../constants"

import { hex2rgba } from "../utils"

const Circle = styled.div({
    transition: "all 0.1s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: hex2rgba(colours.blue, 0.7),
    color: colours.white,
    fontSize: 35,
    lineHeight: "52px",
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 20,
    textAlign: "center",

    width: 275,
    height: 275,
    borderRadius: 275 / 2,

    [mq[0]]: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        fontSize: 25,
        lineHeight: "40px",
    },
    [mq[2]]: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        fontSize: 12,
        lineHeight: "26px",
    },

    "&:hover": {
        backgroundColor: colours.blue,
        color: colours.white,
    },
})
const buttonStyles = css({
    marginRight: 30,
    marginBottom: 100,
    padding: 0,
    borderRadius: 275 / 2,
    [mq[0]]: {
        borderRadius: 200 / 2,
        marginRight: 30,
        marginBottom: 50,
    },
    [mq[1]]: {
        margin: 10,
    },
    [mq[2]]: {
        borderRadius: 100 / 2,
    },

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

                [mq[2]]: {
                    height: "inherit",
                },
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

                        [mq[2]]: {
                            padding: "25px 0",
                        },
                    },
                    style,
                ]}
            >
                <Section
                    css={{
                        marginLeft: 475,
                        flexWrap: "wrap",
                        justifyContent: "center",
                        padding: "0 50px",
                        maxWidth: 1300,
                        [mq[0]]: {
                            margin: "350px auto 0",
                            padding: 0,
                        },
                        [mq[2]]: {
                            marginTop: 200,
                        },
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
