/** @jsx jsx */
import { jsx } from "@emotion/react"
import React from "react"

import { boxShadow, colours, mq } from "../constants"
import Section from "./section"
import ScrollButton from "./scrollButton"

const Fork = ({ colour, mirror, style }) => (
    <div
        css={[
            {
                height: 150,
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: mirror ? "column-reverse" : "column",
                [mq[2]]: {
                    height: 50,
                },
            },
            style,
        ]}
    >
        <div css={{ width: 10, height: 140, backgroundColor: colour }} />
        <div
            css={{
                border: `10px solid ${colour}`,
                height: 60,
                width: 90,
                ...(mirror
                    ? {
                          borderBottomLeftRadius: 60,
                          borderBottomRightRadius: 60,
                          borderTop: 0,
                      }
                    : {
                          borderTopLeftRadius: 60,
                          borderTopRightRadius: 60,
                          borderBottom: 0,
                      }),

                [mq[2]]: {
                    height: 0,
                    border: "none",
                },
            }}
        />
    </div>
)

const Project = ({
    targetId,
    title,
    description,
    images,
    primaryColour,
    secondaryColour,
    button,
    mirror,
}) => (
    <React.Fragment>
        <Fork
            colour={secondaryColour}
            style={{ "*:first-child>&": { display: "none" } }}
            mirror
        />
        <div id={targetId} />
        <div
            css={{
                backgroundColor: secondaryColour,
                margin: "0 56px",
                padding: "42px 70px",

                [mq[2]]: {
                    margin: 0,
                    padding: 20,
                },
            }}
        >
            <Section
                css={{
                    marginBottom: 53,
                    flexDirection: mirror ? "row-reverse" : "row",

                    [mq[0]]: {
                        flexDirection: "column",
                        marginBottom: 0,
                    },
                }}
            >
                <div
                    css={{
                        width: "32vw",
                        overflow: "hidden",

                        [mq[0]]: {
                            width: "100%",
                            margin: 0,
                        },
                    }}
                >
                    <h1
                        css={{
                            color: primaryColour,
                            fontSize: 42,
                            textTransform: "uppercase",

                            [mq[0]]: {
                                fontSize: 40,
                            },
                            [mq[2]]: {
                                fontSize: 28,
                            },
                        }}
                    >
                        {title}
                        <ScrollButton
                            targetId="work"
                            css={{
                                display: "inline-block",
                                verticalAlign: "top",

                                [mq[2]]: {
                                    float: "right",
                                },
                            }}
                        >
                            <img
                                src={button}
                                css={{
                                    height: 45,
                                    margin: 0,
                                    marginLeft: 30,

                                    [mq[0]]: {
                                        height: 40,
                                    },
                                    [mq[2]]: {
                                        height: 28,
                                    },
                                }}
                            />
                        </ScrollButton>
                    </h1>
                    <p
                        css={{
                            color: primaryColour,
                            fontSize: 22,
                            lineHeight: "50px",
                            letterSpacing: 1.38,

                            [mq[0]]: {
                                fontSize: 25,
                                lineHeight: "48px",
                            },
                            [mq[2]]: {
                                fontSize: 18,
                                lineHeight: "24px",
                            },
                        }}
                    >
                        {description}
                    </p>
                </div>
                <div
                    css={{
                        width: "60vw",
                        height: "50vh",

                        [mq[0]]: {
                            width: "initial",
                            height: "initial",
                        },
                    }}
                />
                <img
                    src={images?.[0]}
                    alt={`${title} 1`}
                    css={{
                        position: "absolute",
                        width: "60vw",
                        height: "50vh",
                        background: colours.white,
                        boxShadow: boxShadow,
                        objectFit: "cover",
                        ...(mirror ? { left: 0 } : { right: 0 }),

                        [mq[0]]: {
                            position: "relative",
                            width: "initial",
                            height: "initial",
                        },
                    }}
                />
            </Section>
            <Section
                css={{
                    justifyContent: "space-between",

                    [mq[0]]: {
                        flexDirection: "column",
                    },
                }}
            >
                <img
                    src={images?.[1]}
                    alt={`${title} 2`}
                    css={{
                        width: "40vw",
                        height: "20vw",
                        background: colours.white,
                        boxShadow: boxShadow,
                        objectFit: "cover",

                        [mq[0]]: {
                            width: "initial",
                            height: "initial",
                        },
                    }}
                />
                <img
                    src={images?.[2]}
                    alt={`${title} 3`}
                    css={{
                        width: "40vw",
                        height: "20vw",
                        background: colours.white,
                        boxShadow: boxShadow,
                        objectFit: "cover",

                        [mq[0]]: {
                            width: "initial",
                            height: "initial",
                        },
                    }}
                />
            </Section>
        </div>
        <Fork
            colour={secondaryColour}
            style={{ "*:last-child>&": { display: "none" } }}
        />
    </React.Fragment>
)

export default Project
